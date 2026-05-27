const API_BASE = 'https://api.github.com';

function normalizePath(path = '') {
  return String(path).replace(/^\/+/, '');
}

function encodeUtf8ToBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function decodeBase64ToUtf8(base64) {
  const binary = atob(String(base64 || '').replace(/\s/g, ''));
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function buildHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  };
}

async function parseResponse(response) {
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    const message = data?.message || response.statusText || 'GitHub API error';
    throw new Error(message);
  }

  return data;
}

export async function listGithubRepos(token) {
  const repos = [];
  let page = 1;
  let hasMore = true;

  while (hasMore && page <= 5) {
    const url = `${API_BASE}/user/repos?per_page=100&page=${page}&sort=updated&affiliation=owner,collaborator,organization_member`;
    const response = await fetch(url, { headers: buildHeaders(token) });
    const data = await parseResponse(response);
    repos.push(...data);
    hasMore = Array.isArray(data) && data.length === 100;
    page += 1;
  }

  return repos;
}

export async function listGithubBranches(token, owner, repo) {
  const response = await fetch(`${API_BASE}/repos/${owner}/${repo}/branches?per_page=100`, {
    headers: buildHeaders(token)
  });
  return parseResponse(response);
}

export async function getGithubFile(token, owner, repo, path, branch) {
  const cleanPath = normalizePath(path);
  const response = await fetch(`${API_BASE}/repos/${owner}/${repo}/contents/${encodeURI(cleanPath)}?ref=${encodeURIComponent(branch)}`, {
    headers: buildHeaders(token)
  });
  const data = await parseResponse(response);

  if (Array.isArray(data)) {
    throw new Error('Path mengarah ke folder, bukan file.');
  }

  return {
    path: data.path,
    sha: data.sha,
    content: decodeBase64ToUtf8(data.content || ''),
    raw: data
  };
}

export async function getGithubFileMeta(token, owner, repo, path, branch) {
  const cleanPath = normalizePath(path);
  const response = await fetch(`${API_BASE}/repos/${owner}/${repo}/contents/${encodeURI(cleanPath)}?ref=${encodeURIComponent(branch)}`, {
    headers: buildHeaders(token)
  });

  if (response.status === 404) {
    return null;
  }

  const data = await parseResponse(response);
  if (Array.isArray(data)) return null;
  return data;
}

export async function putGithubTextFile({ token, owner, repo, branch, path, content, message }) {
  const cleanPath = normalizePath(path);
  const existing = await getGithubFileMeta(token, owner, repo, cleanPath, branch);

  const body = {
    message,
    content: encodeUtf8ToBase64(content),
    branch
  };

  if (existing?.sha) {
    body.sha = existing.sha;
  }

  const response = await fetch(`${API_BASE}/repos/${owner}/${repo}/contents/${encodeURI(cleanPath)}`, {
    method: 'PUT',
    headers: {
      ...buildHeaders(token),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return parseResponse(response);
}

export async function putGithubBase64File({ token, owner, repo, branch, path, base64Content, message }) {
  const cleanPath = normalizePath(path);
  const existing = await getGithubFileMeta(token, owner, repo, cleanPath, branch);

  const body = {
    message,
    content: base64Content,
    branch
  };

  if (existing?.sha) {
    body.sha = existing.sha;
  }

  const response = await fetch(`${API_BASE}/repos/${owner}/${repo}/contents/${encodeURI(cleanPath)}`, {
    method: 'PUT',
    headers: {
      ...buildHeaders(token),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return parseResponse(response);
}

export async function deleteGithubFile({ token, owner, repo, branch, path, message }) {
  const cleanPath = normalizePath(path);
  const existing = await getGithubFileMeta(token, owner, repo, cleanPath, branch);

  if (!existing?.sha) {
    throw new Error('File tidak ditemukan di repo.');
  }

  const response = await fetch(`${API_BASE}/repos/${owner}/${repo}/contents/${encodeURI(cleanPath)}`, {
    method: 'DELETE',
    headers: {
      ...buildHeaders(token),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message,
      sha: existing.sha,
      branch
    })
  });

  return parseResponse(response);
}

export function fileToBase64Payload(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || '');
      const base64Content = result.includes(',') ? result.split(',')[1] : result;
      resolve(base64Content);
    };
    reader.onerror = () => reject(new Error('Gagal membaca file gambar.'));
    reader.readAsDataURL(file);
  });
}
