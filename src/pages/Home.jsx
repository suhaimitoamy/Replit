import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';
import { Play, Brain, BookMarked, Activity, BookOpen } from 'lucide-react';

export default function Home() {
  const { progress, loadProgress, isLoading } = useStore();

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  // Calculate XP progress to next rank
  const nextRankXP = progress.totalXP >= 2500 ? 2500 : 
                     progress.totalXP >= 2000 ? 2500 : 
                     progress.totalXP >= 1600 ? 2000 :
                     progress.totalXP >= 1250 ? 1600 :
                     progress.totalXP >= 950 ? 1250 :
                     progress.totalXP >= 700 ? 950 :
                     progress.totalXP >= 500 ? 700 :
                     progress.totalXP >= 350 ? 500 :
                     progress.totalXP >= 200 ? 350 : 200;

  const xpPercent = Math.min(100, Math.floor((progress.totalXP / nextRankXP) * 100));

  return (
    <div className="p-4 space-y-6 pb-24">
      {/* Header Profile */}
      <header className="bg-dark p-6 rounded-2xl glow-border">
        <h1 className="text-2xl font-bold font-mono text-neon glow-text mb-2">Amy Trading Quest</h1>
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-sm text-gray-400">Current Rank</p>
            <h2 className="text-xl font-bold">{progress.rank}</h2>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Total XP</p>
            <p className="text-xl font-mono text-neon">{progress.totalXP} <span className="text-sm text-gray-500">/ {nextRankXP}</span></p>
          </div>
        </div>
        
        {/* XP Bar */}
        <div className="w-full bg-gray-800 rounded-full h-3 mb-2">
          <div 
            className="bg-neon h-3 rounded-full glow-border-active transition-all duration-500" 
            style={{ width: `${xpPercent}%` }}
          ></div>
        </div>
      </header>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Link to="/materi" className="bg-dark p-4 rounded-xl border border-gray-800 flex flex-col items-center justify-center space-y-2 hover:border-neon transition-colors">
          <BookOpen className="text-neon" size={32} />
          <span className="font-mono text-sm text-center">Lanjut Belajar</span>
        </Link>
        <Link to="/ai" className="bg-dark p-4 rounded-xl border border-gray-800 flex flex-col items-center justify-center space-y-2 hover:border-neon transition-colors">
          <Brain className="text-neon" size={32} />
          <span className="font-mono text-sm text-center">AI Evaluator</span>
        </Link>
        <Link to="/journal" className="bg-dark p-4 rounded-xl border border-gray-800 flex flex-col items-center justify-center space-y-2 hover:border-neon transition-colors">
          <BookMarked className="text-neon" size={32} />
          <span className="font-mono text-sm text-center">Buka Jurnal</span>
        </Link>
        <Link to="/progress" className="bg-dark p-4 rounded-xl border border-gray-800 flex flex-col items-center justify-center space-y-2 hover:border-neon transition-colors">
          <Activity className="text-neon" size={32} />
          <span className="font-mono text-sm text-center">Statistik XP</span>
        </Link>
      </div>

      <div className="bg-darker p-4 rounded-xl border border-gray-800 text-center">
        <p className="text-sm text-gray-400">Level Terbuka: <span className="text-white font-bold">{progress.unlockedLevels?.length || 0}/10</span></p>
        <p className="text-sm text-gray-400">Materi Selesai: <span className="text-white font-bold">{progress.completedLessons?.length || 0}</span></p>
      </div>
    </div>
  );
}
