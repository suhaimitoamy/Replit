import { openDB } from 'idb';

const DB_NAME = 'amy_trading_quest_db';
const DB_VERSION = 2; // Bumped version for journals

import { defaultProgress } from '../store/defaultProgress';

export async function initDB() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db, oldVersion, newVersion, transaction) {
      if (!db.objectStoreNames.contains('user_progress')) {
        db.createObjectStore('user_progress');
      }
      if (!db.objectStoreNames.contains('lesson_progress')) {
        db.createObjectStore('lesson_progress');
      }
      if (!db.objectStoreNames.contains('quiz_results')) {
        db.createObjectStore('quiz_results', { keyPath: 'quizId' });
      }
      if (!db.objectStoreNames.contains('mission_results')) {
        db.createObjectStore('mission_results', { keyPath: 'missionId' });
      }
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings');
      }
      if (!db.objectStoreNames.contains('journal_entries')) {
        db.createObjectStore('journal_entries', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

export async function getProgress() {
  try {
    const db = await initDB();
    let progress = await db.get('user_progress', 'main');

  if (!progress) {
    progress = defaultProgress;
  } else {
    // Migration safe defaults for existing users (deep merge shallow properties)
    progress = { ...defaultProgress, ...progress };
    
    // Ensure nested objects aren't replaced entirely if they exist
    progress.quizResults = progress.quizResults || defaultProgress.quizResults;
    progress.quizFails = progress.quizFails || defaultProgress.quizFails;
    progress.checklistProgress = progress.checklistProgress || defaultProgress.checklistProgress;
    progress.lockedQuizzes = progress.lockedQuizzes || defaultProgress.lockedQuizzes;
    progress.unlockedLevels = progress.unlockedLevels?.length ? progress.unlockedLevels : defaultProgress.unlockedLevels;
    progress.completedLessons = progress.completedLessons || defaultProgress.completedLessons;
    
    if (!progress.unlockedLevels.includes('level-01')) {
      progress.unlockedLevels.push('level-01');
    }
    if (!progress.unlockedLevels.includes('level-1')) {
      progress.unlockedLevels.push('level-1');
    }
    if (progress.lockedLevels) {
      progress.lockedLevels = progress.lockedLevels.filter(id => id !== 'level-01' && id !== 'level-1');
    }
  }
  
  return progress;
  } catch (error) {
    console.error("IndexedDB getProgress failed, using defaults:", error);
    return defaultProgress;
  }
}

export async function saveProgress(progress) {
  const db = await initDB();
  await db.put('user_progress', progress, 'main');
}

export async function getSettings() {
  const db = await initDB();
  const settings = await db.get('settings', 'main');
  const defaults = {
    aiProvider: 'OpenRouter',
    apiKey: '',
    model: 'openrouter/auto',
    visualTheme: 'neon-green',
    touchEffect: 'Firefly',
  };
  return settings ? { ...defaults, ...settings } : defaults;
}

export async function saveSettings(settings) {
  const db = await initDB();
  await db.put('settings', settings, 'main');
}

export async function getJournals() {
  const db = await initDB();
  return db.getAll('journal_entries');
}

export async function saveJournal(entry) {
  const db = await initDB();
  await db.add('journal_entries', { ...entry, date: new Date().toISOString() });
}

export async function updateJournal(entry) {
  const db = await initDB();
  await db.put('journal_entries', entry);
}

export async function deleteJournal(id) {
  const db = await initDB();
  await db.delete('journal_entries', id);
}

export async function exportData() {
  const db = await initDB();
  const data = {
    user_progress: await db.get('user_progress', 'main'),
    settings: await db.get('settings', 'main'),
    journal_entries: await db.getAll('journal_entries'),
    quiz_results: await db.getAll('quiz_results'),
  };
  return JSON.stringify(data);
}

export async function importData(jsonString) {
  const db = await initDB();
  const data = JSON.parse(jsonString);
  const tx = db.transaction(['user_progress', 'settings', 'journal_entries', 'quiz_results'], 'readwrite');
  
  if (data.user_progress) await tx.objectStore('user_progress').put(data.user_progress, 'main');
  if (data.settings) await tx.objectStore('settings').put(data.settings, 'main');
  
  if (data.journal_entries) {
    await tx.objectStore('journal_entries').clear();
    for (const entry of data.journal_entries) {
      await tx.objectStore('journal_entries').add(entry);
    }
  }
  
  if (data.quiz_results) {
    await tx.objectStore('quiz_results').clear();
    for (const res of data.quiz_results) {
      await tx.objectStore('quiz_results').add(res);
    }
  }
  
  await tx.done;
}
