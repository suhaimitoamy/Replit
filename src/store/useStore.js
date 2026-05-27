import { create } from 'zustand';
import { getProgress, saveProgress, getSettings, saveSettings } from '../services/db';
import { defaultProgress } from './defaultProgress';
import levelsData from '../data/levels.json';

export const useStore = create((set, get) => ({
  progress: defaultProgress,
  levels: levelsData,
  isLoading: true,
  settings: {
    aiProvider: 'OpenRouter',
    apiKey: '',
    model: 'openrouter/auto',
    visualTheme: 'neon-green',
    touchEffect: 'Firefly',
    developerModeUnlocked: false,
  },

  loadSettings: async () => {
    try {
      const data = await getSettings();
      set({ settings: data });
    } catch (err) {
      console.error("Failed to load settings:", err);
    }
  },

  updateSettings: async (newSettings) => {
    const current = get().settings;
    const updated = { ...current, ...newSettings };
    await saveSettings(updated);
    set({ settings: updated });
  },

  loadProgress: async () => {
    // Prevent duplicate loading if already loaded real data
    // We check if it's the default object reference. If it's not, we already loaded.
    if (get().progress !== defaultProgress) return;
    
    try {
      const data = await getProgress();
      set({ progress: data, isLoading: false });
    } catch (err) {
      console.error("Failed to load progress:", err);
      // Fallback in case of absolute failure so we don't get stuck
      set({ progress: {}, isLoading: false }); 
    }
  },

  addXP: async (amount) => {
    const rawProgress = get().progress;
    const progress = rawProgress || defaultProgress;
    
    const newXP = progress.totalXP + amount;
    
    let newRank = progress.rank;
    if (newXP >= 2500) newRank = 'God Level Candidate';
    else if (newXP >= 2000) newRank = 'ICT Apprentice';
    else if (newXP >= 1600) newRank = 'Entry Planner';
    else if (newXP >= 1250) newRank = 'Risk Guardian';
    else if (newXP >= 950) newRank = 'Liquidity Seeker';
    else if (newXP >= 700) newRank = 'Structure Learner';
    else if (newXP >= 500) newRank = 'Break Retest Scout';
    else if (newXP >= 350) newRank = 'SNR Hunter';
    else if (newXP >= 200) newRank = 'Candle Reader';
    else newRank = 'Newbie Trader';

    const newProgress = { ...progress, totalXP: newXP, rank: newRank };
    await saveProgress(newProgress);
    set({ progress: newProgress });
  },

  completeLesson: async (lessonId, xpReward = 10) => {
    const rawProgress = get().progress;
    const progress = rawProgress || defaultProgress;

    const currentCompleted = progress.completedLessons || [];
    const currentLocked = progress.lockedQuizzes || [];
    const currentFails = progress.quizFails || {};

    let shouldAddXP = false;
    let newCompleted = [...currentCompleted];

    if (!newCompleted.includes(lessonId)) {
      newCompleted.push(lessonId);
      shouldAddXP = true;
    }

    let newLockedQuizzes = [...currentLocked];
    let newQuizFails = { ...currentFails };
    
    const levelPrefix = lessonId.split('/')[0];
    const quizIdToUnlock = newLockedQuizzes.find(qId => qId === `quiz-${levelPrefix.split('-')[1]}`);
    if (quizIdToUnlock) {
      newLockedQuizzes = newLockedQuizzes.filter(id => id !== quizIdToUnlock);
      newQuizFails[quizIdToUnlock] = 0;
    }

    const newProgress = {
      ...progress,
      completedLessons: newCompleted,
      lockedQuizzes: newLockedQuizzes,
      quizFails: newQuizFails
    };

    if (shouldAddXP) {
      newProgress.totalXP = newProgress.totalXP + xpReward;
      
      let newRank = newProgress.rank;
      const xp = newProgress.totalXP;
      if (xp >= 2500) newRank = 'God Level Candidate';
      else if (xp >= 2000) newRank = 'ICT Apprentice';
      else if (xp >= 1600) newRank = 'Entry Planner';
      else if (xp >= 1250) newRank = 'Risk Guardian';
      else if (xp >= 950) newRank = 'Liquidity Seeker';
      else if (xp >= 700) newRank = 'Structure Learner';
      else if (xp >= 500) newRank = 'Break Retest Scout';
      else if (xp >= 350) newRank = 'SNR Hunter';
      else if (xp >= 200) newRank = 'Candle Reader';
      else newRank = 'Newbie Trader';
      
      newProgress.rank = newRank;
    }

    await saveProgress(newProgress);
    set({ progress: newProgress });
  },

  saveQuizResult: async (quizId, score, passed, failIncrement = 0, lockQuiz = false) => {
    const rawProgress = get().progress;
    const progress = rawProgress || defaultProgress;

    const currentResults = progress.quizResults || {};
    const currentFails = progress.quizFails || {};
    const currentLocked = progress.lockedQuizzes || [];

    const newFails = { ...currentFails };
    const newLocked = [...currentLocked];

    if (failIncrement > 0) {
      newFails[quizId] = (newFails[quizId] || 0) + failIncrement;
    }
    
    if (lockQuiz && !newLocked.includes(quizId)) {
      newLocked.push(quizId);
    }
    
    if (passed) {
      newFails[quizId] = 0;
      const lockIdx = newLocked.indexOf(quizId);
      if (lockIdx > -1) newLocked.splice(lockIdx, 1);
    }

    const newProgress = {
      ...progress,
      quizResults: {
        ...currentResults,
        [quizId]: { score, passed }
      },
      quizFails: newFails,
      lockedQuizzes: newLocked
    };
    await saveProgress(newProgress);
    set({ progress: newProgress });
  },

  saveEssayResult: async (quizId, score, passed, feedback) => {
    const rawProgress = get().progress;
    const progress = rawProgress || defaultProgress;

    const currentResults = progress.essayResults || {};
    
    const newProgress = {
      ...progress,
      essayResults: {
        ...currentResults,
        [quizId]: { score, passed, feedback }
      }
    };
    await saveProgress(newProgress);
    set({ progress: newProgress });
  },

  unlockLevel: async (levelId) => {
    const rawProgress = get().progress;
    const progress = rawProgress || defaultProgress;
    
    const unlocked = progress.unlockedLevels || [];
    if (unlocked.includes(levelId)) return;
    
    const newProgress = { 
      ...progress, 
      unlockedLevels: [...unlocked, levelId] 
    };
    await saveProgress(newProgress);
    set({ progress: newProgress });
  },

  saveChecklist: async (lessonId, checks) => {
    const rawProgress = get().progress;
    const progress = rawProgress || defaultProgress;
    
    const currentChecklist = progress.checklistProgress || {};
    
    const newProgress = {
      ...progress,
      checklistProgress: {
        ...currentChecklist,
        [lessonId]: checks
      }
    };
    await saveProgress(newProgress);
    set({ progress: newProgress });
  }
}));
