import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import { Lock, Unlock, CheckCircle } from 'lucide-react';

export default function QuestMap() {
  const navigate = useNavigate();
  const { levels, progress, loadProgress, isLoading, settings } = useStore();
  const developerModeUnlocked = Boolean(settings?.developerModeUnlocked);

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  return (
    <div className="p-4 pb-24">
      <h1 className="text-3xl font-bold font-mono text-center text-neon glow-text mb-8 mt-4">Quest Map</h1>
      {developerModeUnlocked && (
        <div className="bg-neon/10 border border-neon/40 text-neon rounded-xl p-3 text-sm font-bold text-center mb-6">
          Developer Mode aktif: semua level terbuka untuk pengecekan.
        </div>
      )}
      
      <div className="relative">
        {/* Map Line Connector */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800 -translate-x-1/2 z-0"></div>

        <div className="space-y-12 relative z-10">
          {levels.map((level, index) => {
            const isUnlocked = developerModeUnlocked || level.id === 'level-1' || level.id === 'level-01' || progress.unlockedLevels?.includes(level.id);
            // Completed if all lessons are done AND quiz is passed
            const lessonsDone = level.lessons.every(l => progress.completedLessons?.includes(l));
            const quizScore = progress.quizResults?.[level.quizId]?.score;
            const isCompleted = !developerModeUnlocked && lessonsDone && quizScore !== undefined && progress.quizResults[level.quizId].passed;
            
            const isLeft = index % 2 === 0;

            let statusClass = "bg-darker border-gray-800 text-gray-500 opacity-70";
            if (isCompleted) {
              statusClass = "bg-dark border-neon text-neon glow-border opacity-100";
            } else if (isUnlocked) {
              statusClass = "bg-dark border-blue-500 text-blue-400 glow-border-active opacity-100";
            }

            return (
              <div key={level.id} className={`flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                <div 
                  onClick={() => {
                    if (isUnlocked) navigate(`/materi`);
                  }}
                  className={`w-[85%] p-4 rounded-xl border-2 transition-all cursor-pointer ${statusClass} ${isUnlocked ? 'hover:scale-105' : ''}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg font-mono">Lv {level.number}: {level.title}</h3>
                    {isCompleted ? <CheckCircle size={20} /> : isUnlocked ? <Unlock size={20} /> : <Lock size={20} />}
                  </div>
                  <p className="text-xs mb-2 opacity-80">{level.theme}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span>{level.targetXP} XP</span>
                    {!isUnlocked && <span className="text-danger font-bold">Locked</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
