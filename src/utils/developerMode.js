export const DEVELOPER_CODE = 'AMY-DEV-2026';
export const DEVELOPER_LOCAL_UNLOCK_KEY = 'amy_developer_mode_unlocked';

export function isDeveloperModeStoredLocally() {
  try {
    return localStorage.getItem(DEVELOPER_LOCAL_UNLOCK_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setDeveloperModeStoredLocally(value) {
  try {
    if (value) {
      localStorage.setItem(DEVELOPER_LOCAL_UNLOCK_KEY, 'true');
    } else {
      localStorage.removeItem(DEVELOPER_LOCAL_UNLOCK_KEY);
    }
  } catch {
    // Ignore storage errors so the app stays usable.
  }
}

export function getRuntimeBasePath() {
  if (typeof window === 'undefined') return '/';
  const pathname = window.location.pathname || '/';
  if (pathname.endsWith('/')) return pathname;
  const lastSlash = pathname.lastIndexOf('/');
  return lastSlash >= 0 ? pathname.slice(0, lastSlash + 1) : '/';
}

export function resolvePublicAssetPath(src) {
  if (!src) return '';
  const value = String(src).trim();
  if (/^(https?:|data:|blob:)/i.test(value)) return value;

  const base = getRuntimeBasePath();
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  if (value.startsWith('/')) {
    const withoutSlash = value.replace(/^\/+/, '');
    const baseWithoutSlash = cleanBase.replace(/^\/+|\/+$/g, '');
    if (baseWithoutSlash && withoutSlash.startsWith(`${baseWithoutSlash}/`)) {
      return `/${withoutSlash}`;
    }
    return `${cleanBase}${withoutSlash}`;
  }

  if (value.startsWith('images/')) {
    return `${cleanBase}${value}`;
  }

  return value;
}

export function normalizeLessonImagePath(src) {
  if (!src) return '';
  let value = String(src).trim();

  try {
    if (/^https?:\/\//i.test(value)) {
      value = new URL(value).pathname;
    }
  } catch {
    // Keep original value if URL parsing fails.
  }

  const imageIndex = value.indexOf('/images/lessons/');
  if (imageIndex >= 0) {
    return value.slice(imageIndex + 1);
  }

  const publicIndex = value.indexOf('/public/images/lessons/');
  if (publicIndex >= 0) {
    return value.slice(publicIndex + '/public/'.length + 1);
  }

  value = value.replace(/^\/+/, '');
  if (value.startsWith('images/lessons/')) return value;
  if (value.startsWith('public/images/lessons/')) return value.replace(/^public\//, '');

  return value;
}

export function githubRawPublicUrl(repoFullName, branch, imageSrc) {
  const cleanImagePath = normalizeLessonImagePath(imageSrc);
  if (!repoFullName || !branch || !cleanImagePath.startsWith('images/lessons/')) {
    return resolvePublicAssetPath(imageSrc);
  }

  return `https://raw.githubusercontent.com/${repoFullName}/${encodeURIComponent(branch)}/public/${cleanImagePath}`;
}
