import { useEffect, useMemo, useRef, useState } from 'react';
import { Github, LockKeyhole, RefreshCw, Save, Upload, Trash2, Plus, FileText, Image as ImageIcon, Eye, LogOut } from 'lucide-react';
import {
  deleteGithubFile,
  fileToBase64Payload,
  getGithubFile,
  listGithubBranches,
  listGithubRepos,
  putGithubBase64File,
  putGithubTextFile
} from '../services/githubContent';
import { useStore } from '../store/useStore';
import {
  DEVELOPER_CODE,
  DEVELOPER_LOCAL_UNLOCK_KEY,
  githubRawPublicUrl,
  isDeveloperModeStoredLocally,
  normalizeLessonImagePath,
  setDeveloperModeStoredLocally
} from '../utils/developerMode';
const TOKEN_STORAGE_KEY = 'amy_dev_github_token';
const TARGET_STORAGE_KEY = 'amy_dev_target_repo';
const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'svg', 'gif'];

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'materi-baru';
}

function padLevel(number) {
  return String(number || '').padStart(2, '0');
}

function makeLessonTitle(lessonId) {
  const name = String(lessonId || '').split('/').pop() || '';
  return name
    .replace(/^\d+-/, '')
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function extractMarkdownImages(markdown) {
  const images = [];
  const regex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let match;

  while ((match = regex.exec(markdown || ''))) {
    images.push({
      alt: match[1],
      src: match[2],
      markdown: match[0],
      index: match.index
    });
  }

  return images;
}

function resolveGithubTargetPath(imageSrc) {
  return normalizeLessonImagePath(imageSrc);
}

export default function DeveloperContentEditor() {
  const settings = useStore((state) => state.settings);
  const updateSettings = useStore((state) => state.updateSettings);
  const [developerCode, setDeveloperCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(() => isDeveloperModeStoredLocally());
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_STORAGE_KEY) || '');
  const [repos, setRepos] = useState([]);
  const [branches, setBranches] = useState([]);
  const [selectedRepoFullName, setSelectedRepoFullName] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(TARGET_STORAGE_KEY) || '{}').fullName || '';
    } catch {
      return '';
    }
  });
  const [selectedBranch, setSelectedBranch] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(TARGET_STORAGE_KEY) || '{}').branch || 'main';
    } catch {
      return 'main';
    }
  });
  const [levels, setLevels] = useState([]);
  const [levelsSha, setLevelsSha] = useState('');
  const [selectedLevelId, setSelectedLevelId] = useState('');
  const [selectedLessonId, setSelectedLessonId] = useState('');
  const [lessonContent, setLessonContent] = useState('');
  const [originalLessonContent, setOriginalLessonContent] = useState('');
  const [lessonSha, setLessonSha] = useState('');
  const [newLessonTitle, setNewLessonTitle] = useState('');
  const [newLessonContent, setNewLessonContent] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [imagePreviewNonce, setImagePreviewNonce] = useState(Date.now());
  const textareaRef = useRef(null);

  const selectedRepo = useMemo(() => {
    if (!selectedRepoFullName) return null;
    const [owner, repo] = selectedRepoFullName.split('/');
    return { owner, repo };
  }, [selectedRepoFullName]);

  const selectedLevel = useMemo(() => levels.find((level) => level.id === selectedLevelId), [levels, selectedLevelId]);
  const selectedLessonPath = selectedLessonId ? `src/lessons/${selectedLessonId}.md` : '';
  const images = useMemo(() => extractMarkdownImages(lessonContent), [lessonContent]);

  useEffect(() => {
    if (settings?.developerModeUnlocked || isDeveloperModeStoredLocally()) {
      setIsUnlocked(true);
    }
  }, [settings?.developerModeUnlocked]);

  function getImagePreviewSrc(imageSrc) {
    const rawUrl = githubRawPublicUrl(selectedRepoFullName, selectedBranch, imageSrc);
    if (/^https?:\/\//i.test(rawUrl)) {
      return `${rawUrl}${rawUrl.includes('?') ? '&' : '?'}v=${imagePreviewNonce}`;
    }
    return rawUrl;
  }

  function setSafeStatus(message) {
    setStatus(message);
  }

  async function withLoading(action, successMessage) {
    try {
      setLoading(true);
      setSafeStatus('Memproses...');
      await action();
      if (successMessage) setSafeStatus(successMessage);
    } catch (error) {
      setSafeStatus(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  async function unlockDeveloper() {
    if (developerCode === DEVELOPER_CODE) {
      setIsUnlocked(true);
      setDeveloperModeStoredLocally(true);
      try {
        await updateSettings({ developerModeUnlocked: true });
      } catch {
        localStorage.setItem(DEVELOPER_LOCAL_UNLOCK_KEY, 'true');
      }
      setSafeStatus('Developer mode tersimpan. Semua materi terbuka untuk pengecekan.');
    } else {
      setSafeStatus('Kode developer salah.');
    }
  }

  async function lockDeveloper() {
    setIsUnlocked(false);
    setDeveloperModeStoredLocally(false);
    try {
      await updateSettings({ developerModeUnlocked: false });
    } catch {
      localStorage.removeItem(DEVELOPER_LOCAL_UNLOCK_KEY);
    }
    setSafeStatus('Developer mode dikunci kembali.');
  }

  async function loadRepos() {
    await withLoading(async () => {
      if (!token.trim()) throw new Error('GitHub token belum diisi.');
      localStorage.setItem(TOKEN_STORAGE_KEY, token.trim());
      const data = await listGithubRepos(token.trim());
      setRepos(data);
      setSafeStatus(`Repo ditemukan: ${data.length}`);
    });
  }

  async function handleRepoChange(fullName) {
    setSelectedRepoFullName(fullName);
    setSelectedBranch('');
    setBranches([]);
    setLevels([]);
    setSelectedLevelId('');
    setSelectedLessonId('');
    setLessonContent('');

    if (!fullName || !token.trim()) return;

    await withLoading(async () => {
      const [owner, repo] = fullName.split('/');
      const branchData = await listGithubBranches(token.trim(), owner, repo);
      setBranches(branchData);
      const defaultBranch = repos.find((item) => item.full_name === fullName)?.default_branch || branchData[0]?.name || 'main';
      setSelectedBranch(defaultBranch);
      localStorage.setItem(TARGET_STORAGE_KEY, JSON.stringify({ fullName, branch: defaultBranch }));
    }, 'Repo siap dipakai.');
  }

  function handleBranchChange(branch) {
    setSelectedBranch(branch);
    localStorage.setItem(TARGET_STORAGE_KEY, JSON.stringify({ fullName: selectedRepoFullName, branch }));
    setLevels([]);
    setSelectedLevelId('');
    setSelectedLessonId('');
    setLessonContent('');
  }

  async function loadLevelsFromRepo() {
    await withLoading(async () => {
      if (!selectedRepo) throw new Error('Repo belum dipilih.');
      if (!selectedBranch) throw new Error('Branch belum dipilih.');
      const file = await getGithubFile(token.trim(), selectedRepo.owner, selectedRepo.repo, 'src/data/levels.json', selectedBranch);
      const parsed = JSON.parse(file.content);
      if (!Array.isArray(parsed)) throw new Error('Format levels.json bukan array.');
      setLevels(parsed);
      setLevelsSha(file.sha);
      setSelectedLevelId(parsed[0]?.id || '');
      setSafeStatus(`levels.json dimuat. Total level: ${parsed.length}`);
    });
  }

  async function loadLesson(lessonId) {
    setSelectedLessonId(lessonId);
    setLessonContent('');
    setOriginalLessonContent('');
    setLessonSha('');
    setPreviewOpen(false);

    if (!lessonId) return;

    await withLoading(async () => {
      if (!selectedRepo) throw new Error('Repo belum dipilih.');
      const file = await getGithubFile(token.trim(), selectedRepo.owner, selectedRepo.repo, `src/lessons/${lessonId}.md`, selectedBranch);
      setLessonContent(file.content);
      setOriginalLessonContent(file.content);
      setLessonSha(file.sha);
    }, 'Materi berhasil dimuat.');
  }

  async function saveLessonContent() {
    await withLoading(async () => {
      if (!selectedRepo) throw new Error('Repo belum dipilih.');
      if (!selectedLessonId) throw new Error('Materi belum dipilih.');
      await putGithubTextFile({
        token: token.trim(),
        owner: selectedRepo.owner,
        repo: selectedRepo.repo,
        branch: selectedBranch,
        path: selectedLessonPath,
        content: lessonContent,
        message: `Update materi ${selectedLessonId}`
      });
      setOriginalLessonContent(lessonContent);
    }, 'Materi berhasil disimpan ke GitHub. Tunggu GitHub Actions selesai lalu refresh aplikasi.');
  }

  async function saveLevelsJson(nextLevels, message = 'Update daftar materi') {
    if (!selectedRepo) throw new Error('Repo belum dipilih.');
    await putGithubTextFile({
      token: token.trim(),
      owner: selectedRepo.owner,
      repo: selectedRepo.repo,
      branch: selectedBranch,
      path: 'src/data/levels.json',
      content: JSON.stringify(nextLevels, null, 2) + '\n',
      message
    });
    setLevels(nextLevels);
    setLevelsSha('updated');
  }

  async function createNewLesson() {
    await withLoading(async () => {
      if (!selectedRepo) throw new Error('Repo belum dipilih.');
      if (!selectedLevel) throw new Error('Level belum dipilih.');
      if (!newLessonTitle.trim()) throw new Error('Judul materi baru belum diisi.');

      const lessonNumber = (selectedLevel.lessons?.length || 0) + 1;
      const folder = `level-${padLevel(selectedLevel.number)}`;
      const lessonId = `${folder}/${String(lessonNumber).padStart(2, '0')}-${slugify(newLessonTitle)}`;
      const nextLevels = levels.map((level) => {
        if (level.id !== selectedLevel.id) return level;
        return {
          ...level,
          lessons: [...(level.lessons || []), lessonId]
        };
      });
      const content = newLessonContent.trim() || `# ${newLessonTitle.trim()}\n\nTulis materi di sini.\n`;

      await putGithubTextFile({
        token: token.trim(),
        owner: selectedRepo.owner,
        repo: selectedRepo.repo,
        branch: selectedBranch,
        path: `src/lessons/${lessonId}.md`,
        content,
        message: `Tambah materi ${lessonId}`
      });

      await saveLevelsJson(nextLevels, `Update levels.json untuk ${lessonId}`);
      setSelectedLevelId(selectedLevel.id);
      setNewLessonTitle('');
      setNewLessonContent('');
      await loadLesson(lessonId);
    }, 'Materi baru berhasil dibuat dan masuk levels.json.');
  }

  async function deleteSelectedLesson() {
    if (!selectedLessonId || !selectedLevel) return;
    const confirmed = window.confirm(`Hapus materi ini dari repo dan levels.json?\n\n${selectedLessonId}`);
    if (!confirmed) return;

    await withLoading(async () => {
      if (!selectedRepo) throw new Error('Repo belum dipilih.');
      const nextLevels = levels.map((level) => {
        if (level.id !== selectedLevel.id) return level;
        return {
          ...level,
          lessons: (level.lessons || []).filter((lesson) => lesson !== selectedLessonId)
        };
      });

      await saveLevelsJson(nextLevels, `Update levels.json setelah hapus ${selectedLessonId}`);

      await deleteGithubFile({
        token: token.trim(),
        owner: selectedRepo.owner,
        repo: selectedRepo.repo,
        branch: selectedBranch,
        path: `src/lessons/${selectedLessonId}.md`,
        message: `Hapus materi ${selectedLessonId}`
      });
      setSelectedLessonId('');
      setLessonContent('');
      setOriginalLessonContent('');
      setLessonSha('');
    }, 'Materi berhasil dihapus.');
  }

  function insertIntoEditor(text) {
    const textarea = textareaRef.current;
    if (!textarea) {
      const next = `${lessonContent}\n\n${text}\n`;
      setLessonContent(next);
      return next;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const current = lessonContent;
    const before = current.slice(0, start);
    const after = current.slice(end);
    const next = `${before}${text}${after}`;
    setLessonContent(next);

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.selectionStart = start + text.length;
      textarea.selectionEnd = start + text.length;
    });

    return next;
  }

  async function uploadImage(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    await withLoading(async () => {
      if (!selectedRepo) throw new Error('Repo belum dipilih.');
      if (!selectedLessonId) throw new Error('Pilih materi dulu sebelum upload gambar.');
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!IMAGE_EXTENSIONS.includes(ext)) throw new Error('Format gambar tidak didukung.');

      const lessonFolder = selectedLessonId.split('/')[0];
      const safeName = `${Date.now()}-${slugify(file.name.replace(/\.[^.]+$/, ''))}.${ext}`;
      const githubPath = `public/images/lessons/${lessonFolder}/${safeName}`;
      const markdownPath = `/images/lessons/${lessonFolder}/${safeName}`;
      const base64Content = await fileToBase64Payload(file);

      await putGithubBase64File({
        token: token.trim(),
        owner: selectedRepo.owner,
        repo: selectedRepo.repo,
        branch: selectedBranch,
        path: githubPath,
        base64Content,
        message: `Upload gambar ${safeName}`
      });

      const alt = file.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
      const nextContent = insertIntoEditor(`\n\n![${alt}](${markdownPath})\n\n`);

      await putGithubTextFile({
        token: token.trim(),
        owner: selectedRepo.owner,
        repo: selectedRepo.repo,
        branch: selectedBranch,
        path: selectedLessonPath,
        content: nextContent,
        message: `Tambah gambar ${safeName} ke ${selectedLessonId}`
      });

      setOriginalLessonContent(nextContent);
      setImagePreviewNonce(Date.now());
    }, 'Gambar berhasil diupload dan materi otomatis disimpan ke GitHub. Tunggu GitHub Actions selesai lalu refresh aplikasi.');
  }

  function removeImageFromMarkdown(imageMarkdown) {
    setLessonContent((current) => current.replace(imageMarkdown, ''));
  }

  async function deleteImageFile(image) {
    const imageSrc = image?.src || '';
    const confirmed = window.confirm(`Hapus file gambar ini dari repo?\n\n${imageSrc}`);
    if (!confirmed) return;

    await withLoading(async () => {
      if (!selectedRepo) throw new Error('Repo belum dipilih.');
      const path = resolveGithubTargetPath(imageSrc);
      if (!path.startsWith('images/lessons/')) {
        throw new Error('Hanya gambar di folder /images/lessons/ yang bisa dihapus dari panel ini.');
      }
      await deleteGithubFile({
        token: token.trim(),
        owner: selectedRepo.owner,
        repo: selectedRepo.repo,
        branch: selectedBranch,
        path: `public/${path}`,
        message: `Hapus gambar ${path}`
      });
      if (image?.markdown) removeImageFromMarkdown(image.markdown);
      setImagePreviewNonce(Date.now());
    }, 'File gambar berhasil dihapus. Klik Simpan Materi jika markdown ikut berubah.');
  }

  function moveLesson(direction) {
    if (!selectedLevel || !selectedLessonId) return;
    const lessons = [...(selectedLevel.lessons || [])];
    const index = lessons.indexOf(selectedLessonId);
    const nextIndex = index + direction;
    if (index < 0 || nextIndex < 0 || nextIndex >= lessons.length) return;
    [lessons[index], lessons[nextIndex]] = [lessons[nextIndex], lessons[index]];
    setLevels((current) => current.map((level) => level.id === selectedLevel.id ? { ...level, lessons } : level));
  }

  async function commitLessonOrder() {
    await withLoading(async () => {
      await saveLevelsJson(levels, `Update urutan materi ${selectedLevel?.id || ''}`);
    }, 'Urutan materi berhasil disimpan ke GitHub.');
  }

  if (!isUnlocked) {
    return (
      <div className="p-4 max-w-md mx-auto pb-24">
        <div className="bg-dark border border-gray-800 rounded-2xl p-6 space-y-4 shadow-2xl">
          <div className="flex items-center gap-3 text-neon">
            <LockKeyhole size={28} />
            <h1 className="text-2xl font-bold font-mono">Developer Content Editor</h1>
          </div>
          <p className="text-sm text-gray-400">Masukkan Developer Code untuk membuka akses editor GitHub.</p>
          <input
            type="password"
            value={developerCode}
            onChange={(event) => setDeveloperCode(event.target.value)}
            placeholder="Developer Code"
            className="w-full bg-darker border border-gray-700 rounded-xl p-3 text-gray-100 outline-none focus:border-neon"
          />
          <button
            onClick={unlockDeveloper}
            className="w-full bg-neon text-dark font-bold py-3 rounded-xl hover:bg-white transition-colors"
          >
            Buka Developer Mode
          </button>
          {status && <p className="text-sm text-yellow-300">{status}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-5xl mx-auto pb-24 space-y-5">
      <div className="bg-dark border border-gray-800 rounded-2xl p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold font-mono text-neon">Developer Content Editor</h1>
            <p className="text-sm text-gray-400 mt-1">Edit materi, gambar, dan daftar lesson langsung ke GitHub repo yang dipilih.</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-xs text-neon bg-darker border border-neon/40 rounded-lg px-3 py-2">
              Mode: GitHub Direct Commit · Unlock All Materi ON
            </div>
            <button
              onClick={lockDeveloper}
              className="text-xs bg-darker border border-gray-700 rounded-lg px-3 py-2 flex items-center gap-2 hover:border-danger hover:text-danger"
            >
              <LogOut size={14} /> Kunci Lagi
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-dark border border-gray-800 rounded-2xl p-4 space-y-3 md:col-span-1">
          <h2 className="font-bold text-neon flex items-center gap-2"><Github size={18} /> GitHub Target</h2>
          <input
            type="password"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            placeholder="GitHub Classic Token"
            className="w-full bg-darker border border-gray-700 rounded-xl p-3 text-sm outline-none focus:border-neon"
          />
          <button
            onClick={loadRepos}
            disabled={loading}
            className="w-full bg-darker border border-gray-700 hover:border-neon py-3 rounded-xl font-bold text-sm flex justify-center items-center gap-2 disabled:opacity-60"
          >
            <RefreshCw size={16} /> Ambil Daftar Repo
          </button>

          <select
            value={selectedRepoFullName}
            onChange={(event) => handleRepoChange(event.target.value)}
            className="w-full bg-darker border border-gray-700 rounded-xl p-3 text-sm outline-none focus:border-neon"
          >
            <option value="">Pilih repo...</option>
            {repos.map((repo) => (
              <option key={repo.id} value={repo.full_name}>{repo.full_name}</option>
            ))}
          </select>

          <select
            value={selectedBranch}
            onChange={(event) => handleBranchChange(event.target.value)}
            className="w-full bg-darker border border-gray-700 rounded-xl p-3 text-sm outline-none focus:border-neon"
          >
            <option value="">Pilih branch...</option>
            {branches.map((branch) => (
              <option key={branch.name} value={branch.name}>{branch.name}</option>
            ))}
          </select>

          <button
            onClick={loadLevelsFromRepo}
            disabled={loading || !selectedRepoFullName || !selectedBranch}
            className="w-full bg-neon text-dark py-3 rounded-xl font-bold hover:bg-white disabled:opacity-50"
          >
            Load Project Data
          </button>
          <p className="text-xs text-gray-500 leading-relaxed">Setelah commit gambar/materi, tunggu GitHub Actions selesai hijau lalu refresh aplikasi agar hasil deploy terbaru terbaca.</p>
        </div>

        <div className="bg-dark border border-gray-800 rounded-2xl p-4 space-y-3 md:col-span-2">
          <h2 className="font-bold text-neon flex items-center gap-2"><FileText size={18} /> Materi</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <select
              value={selectedLevelId}
              onChange={(event) => {
                setSelectedLevelId(event.target.value);
                setSelectedLessonId('');
                setLessonContent('');
              }}
              className="w-full bg-darker border border-gray-700 rounded-xl p-3 text-sm outline-none focus:border-neon"
            >
              <option value="">Pilih level...</option>
              {levels.map((level) => (
                <option key={level.id} value={level.id}>Lv {level.number}: {level.title}</option>
              ))}
            </select>

            <select
              value={selectedLessonId}
              onChange={(event) => loadLesson(event.target.value)}
              className="w-full bg-darker border border-gray-700 rounded-xl p-3 text-sm outline-none focus:border-neon"
            >
              <option value="">Pilih materi...</option>
              {(selectedLevel?.lessons || []).map((lesson) => (
                <option key={lesson} value={lesson}>{makeLessonTitle(lesson)}</option>
              ))}
            </select>
          </div>

          {selectedLevel && (
            <div className="bg-darker border border-gray-800 rounded-xl p-3 space-y-2">
              <p className="text-xs text-gray-400">Urutan materi level ini</p>
              <div className="flex gap-2 flex-wrap">
                <button onClick={() => moveLesson(-1)} disabled={!selectedLessonId} className="px-3 py-2 rounded-lg bg-dark border border-gray-700 text-sm disabled:opacity-40">Naik</button>
                <button onClick={() => moveLesson(1)} disabled={!selectedLessonId} className="px-3 py-2 rounded-lg bg-dark border border-gray-700 text-sm disabled:opacity-40">Turun</button>
                <button onClick={commitLessonOrder} disabled={!selectedLevel} className="px-3 py-2 rounded-lg bg-dark border border-neon text-neon text-sm disabled:opacity-40">Simpan Urutan</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-dark border border-gray-800 rounded-2xl p-4 space-y-3">
        <h2 className="font-bold text-neon flex items-center gap-2"><Plus size={18} /> Tambah Materi Baru</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <input
            value={newLessonTitle}
            onChange={(event) => setNewLessonTitle(event.target.value)}
            placeholder="Judul materi baru"
            className="w-full bg-darker border border-gray-700 rounded-xl p-3 text-sm outline-none focus:border-neon"
          />
          <button
            onClick={createNewLesson}
            disabled={loading || !selectedLevelId}
            className="bg-neon text-dark py-3 rounded-xl font-bold hover:bg-white disabled:opacity-50"
          >
            Buat Materi Baru
          </button>
        </div>
        <textarea
          value={newLessonContent}
          onChange={(event) => setNewLessonContent(event.target.value)}
          placeholder="Isi awal materi baru. Boleh dikosongkan."
          rows={5}
          className="w-full bg-darker border border-gray-700 rounded-xl p-3 text-sm outline-none focus:border-neon font-mono"
        />
      </div>

      {selectedLessonId && (
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="bg-dark border border-gray-800 rounded-2xl p-4 space-y-3 lg:col-span-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div>
                <h2 className="font-bold text-neon">Editor Markdown</h2>
                <p className="text-xs text-gray-500 break-all">{selectedLessonPath}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setPreviewOpen((current) => !current)}
                  className="px-3 py-2 rounded-lg bg-darker border border-gray-700 text-sm flex items-center gap-2"
                >
                  <Eye size={15} /> Preview
                </button>
                <button
                  onClick={saveLessonContent}
                  disabled={loading || lessonContent === originalLessonContent}
                  className="px-3 py-2 rounded-lg bg-neon text-dark font-bold text-sm flex items-center gap-2 disabled:opacity-50"
                >
                  <Save size={15} /> Simpan Materi
                </button>
                <button
                  onClick={deleteSelectedLesson}
                  className="px-3 py-2 rounded-lg bg-danger/20 border border-danger text-danger font-bold text-sm flex items-center gap-2"
                >
                  <Trash2 size={15} /> Hapus Materi
                </button>
              </div>
            </div>

            <textarea
              ref={textareaRef}
              value={lessonContent}
              onChange={(event) => setLessonContent(event.target.value)}
              rows={22}
              className="w-full bg-darker border border-gray-700 rounded-xl p-4 text-sm outline-none focus:border-neon font-mono leading-relaxed"
            />

            {previewOpen && (
              <div className="bg-darker border border-gray-800 rounded-xl p-4 whitespace-pre-wrap text-sm text-gray-300">
                {lessonContent}
              </div>
            )}
          </div>

          <div className="bg-dark border border-gray-800 rounded-2xl p-4 space-y-4">
            <h2 className="font-bold text-neon flex items-center gap-2"><ImageIcon size={18} /> Gambar Materi</h2>
            <label className="block cursor-pointer bg-neon text-dark text-center py-3 rounded-xl font-bold hover:bg-white">
              <Upload size={16} className="inline mr-2" /> Upload Gambar
              <input type="file" accept=".jpg,.jpeg,.png,.webp,.svg,.gif,image/*" onChange={uploadImage} className="hidden" />
            </label>
            <p className="text-xs text-gray-500">Support: jpg, jpeg, png, webp, svg, gif.</p>

            <div className="space-y-3">
              {images.length === 0 && <p className="text-sm text-gray-500">Belum ada gambar di markdown materi ini.</p>}
              {images.map((image, index) => (
                <div key={`${image.src}-${index}`} className="bg-darker border border-gray-800 rounded-xl p-3 space-y-2">
                  <p className="text-xs text-gray-400 break-all">{image.src}</p>
                  <div className="rounded-lg border border-gray-800 bg-dark overflow-hidden">
                    <img
                      src={getImagePreviewSrc(image.src)}
                      alt={image.alt || 'Preview gambar materi'}
                      className="w-full max-h-48 object-contain bg-black/40"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => removeImageFromMarkdown(image.markdown)}
                      className="px-3 py-2 rounded-lg bg-dark border border-gray-700 text-xs"
                    >
                      Hapus dari Materi
                    </button>
                    <button
                      onClick={() => deleteImageFile(image)}
                      className="px-3 py-2 rounded-lg bg-danger/20 border border-danger text-danger text-xs"
                    >
                      Hapus File Repo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {status && (
        <div className="fixed left-4 right-4 bottom-20 md:left-auto md:right-6 md:w-[420px] bg-darker border border-gray-700 rounded-xl p-3 text-sm text-gray-200 shadow-2xl z-50">
          {loading ? '⏳ ' : ''}{status}
        </div>
      )}
    </div>
  );
}
