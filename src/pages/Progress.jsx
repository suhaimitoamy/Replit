import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Activity, Star, Award, Shield, AlertTriangle, CheckCircle, BookOpen } from 'lucide-react';
import quizData from '../data/quiz.json';

export default function Progress() {
  const { progress, levels, loadProgress, isLoading } = useStore();

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  // Calculate stats
  const totalLevels = levels.length;
  const unlockedCount = progress.unlockedLevels?.length || 0;
  const lockedCount = totalLevels - unlockedCount;
  
  const completedLessonsCount = progress.completedLessons?.length || 0;
  
  let passedQuizzes = 0;
  let failedQuizzes = 0; // Number of quizzes currently in failed state
  
  Object.values(progress.quizResults || {}).forEach(res => {
    if (res.passed) passedQuizzes++;
  });
  
  Object.values(progress.quizFails || {}).forEach(fails => {
    if (fails > 0) failedQuizzes++;
  });

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6 pb-24">
      <h1 className="text-2xl font-bold font-mono text-neon text-center mb-6 glow-text flex justify-center items-center gap-2">
        <Activity /> Progress Tracker
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-dark p-6 rounded-xl border border-gray-800 flex flex-col items-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10"><Star size={64}/></div>
          <Star className="text-yellow-400 mb-2 relative z-10" size={32} />
          <p className="text-xs text-gray-400 relative z-10">Total XP</p>
          <p className="text-2xl font-bold font-mono relative z-10">{progress.totalXP}</p>
        </div>
        <div className="bg-dark p-6 rounded-xl border border-neon flex flex-col items-center shadow-[0_0_15px_rgba(0,255,170,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10"><Shield size={64}/></div>
          <Shield className="text-neon mb-2 relative z-10" size={32} />
          <p className="text-xs text-gray-400 relative z-10">Current Rank</p>
          <p className="text-md font-bold text-center text-neon relative z-10">{progress.rank}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-darker p-4 rounded-xl border border-gray-800">
          <div className="flex items-center gap-2 mb-2 text-gray-400 text-sm">
            <BookOpen size={16} /> Materi Selesai
          </div>
          <p className="text-xl font-mono">{completedLessonsCount}</p>
        </div>
        <div className="bg-darker p-4 rounded-xl border border-gray-800">
          <div className="flex items-center gap-2 mb-2 text-green-400 text-sm">
            <CheckCircle size={16} /> Quiz Lulus
          </div>
          <p className="text-xl font-mono text-green-400">{passedQuizzes}</p>
        </div>
      </div>

      <div className="bg-dark p-5 rounded-xl border border-gray-800 space-y-4">
        <h2 className="font-bold border-b border-gray-800 pb-2 flex items-center gap-2">
          Statistik Level
        </h2>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Level Terbuka</span>
          <span className="font-mono text-blue-400 font-bold">{unlockedCount}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Level Terkunci</span>
          <span className="font-mono text-gray-600">{lockedCount}</span>
        </div>
      </div>

      <div className="bg-dark p-5 rounded-xl border border-gray-800">
        <h2 className="font-bold border-b border-gray-800 pb-2 mb-4">Riwayat Kegagalan Quiz</h2>
        {failedQuizzes === 0 ? (
          <p className="text-sm text-gray-500 text-center py-4">Belum ada quiz yang gagal. Pertahankan!</p>
        ) : (
          <div className="space-y-3">
            {Object.entries(progress.quizFails || {}).map(([qId, fails]) => {
              if (fails === 0) return null;
              const quizName = quizData.find(q => q.id === qId)?.title || qId;
              const isLocked = progress.lockedQuizzes?.includes(qId);
              
              return (
                <div key={qId} className={`flex justify-between items-center p-3 rounded-lg border ${isLocked ? 'border-orange-500 bg-orange-900/20' : 'border-gray-800 bg-darker'}`}>
                  <div>
                    <p className="text-sm font-bold text-gray-300">{quizName}</p>
                    {isLocked && <p className="text-xs text-orange-500 font-bold flex items-center gap-1 mt-1"><AlertTriangle size={12} /> TERKUNCI (Wajib Remedial)</p>}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">Gagal</span>
                    <p className={`font-mono font-bold ${fails >= 3 ? 'text-danger' : 'text-orange-400'}`}>{fails} Kali</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
