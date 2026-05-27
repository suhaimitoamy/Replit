import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, CheckCircle, BookOpen } from 'lucide-react';

export default function Materi() {
  const navigate = useNavigate();
  const { levels, progress, loadProgress } = useStore();

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold font-mono text-neon text-center mb-6">Materi Belajar</h1>
      
      {levels.map((level) => {
        const isUnlocked = level.id === 'level-1' || level.id === 'level-01' || progress.unlockedLevels?.includes(level.id);
        const levelCompleted = level.lessons.every(lesson => progress.completedLessons?.includes(lesson));

        return (
          <div key={level.id} className={`bg-dark rounded-xl border ${isUnlocked ? 'border-gray-700' : 'border-gray-800 opacity-70'} overflow-hidden`}>
            <div className="p-4 bg-darker flex justify-between items-center border-b border-gray-800">
              <div>
                <h2 className={`font-bold font-mono ${isUnlocked ? 'text-neon' : 'text-gray-500'}`}>
                  Lv {level.number}: {level.title}
                </h2>
                <p className="text-xs text-gray-400">{level.lessons.length} Materi</p>
              </div>
              {!isUnlocked && <Lock size={20} className="text-gray-600" />}
              {levelCompleted && <CheckCircle size={20} className="text-neon" />}
            </div>
            
            {isUnlocked && (
              <div className="p-2 space-y-2">
                {level.lessons.map((lessonId, idx) => {
                  const isDone = progress.completedLessons?.includes(lessonId);
                  
                  // Make titles human readable
                  const titleParts = lessonId.split('/')[1].split('-');
                  const title = titleParts.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

                  return (
                    <button
                      key={lessonId}
                      onClick={() => navigate(`/lesson/${encodeURIComponent(lessonId)}`)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                        isDone 
                          ? 'bg-darker border-neon text-gray-300' 
                          : 'bg-dark border-gray-700 hover:border-neon hover:text-neon text-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <BookOpen size={16} className={isDone ? 'text-neon' : ''} />
                        <span className="text-sm font-mono text-left">{idx + 1}. {title}</span>
                      </div>
                      {isDone && <CheckCircle size={16} className="text-neon flex-shrink-0" />}
                    </button>
                  );
                })}

                {/* Quiz Link */}
                <div className="mt-4 pt-4 border-t border-gray-800 p-2">
                  <button
                    onClick={() => navigate(`/quiz/${level.quizId}`)}
                    disabled={!levelCompleted}
                    className={`w-full py-3 rounded-lg font-bold font-mono transition-colors ${
                      levelCompleted 
                        ? 'bg-neon text-dark hover:bg-white glow-border-active' 
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {levelCompleted ? 'Buka Quiz Level' : 'Selesaikan Semua Materi Dulu'}
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
