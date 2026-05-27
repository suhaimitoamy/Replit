import { Link } from 'react-router-dom';
import { Settings as SettingsIcon, Brain, BookMarked, Github } from 'lucide-react';

export default function MoreMenu() {
  return (
    <div className="p-4 max-w-xl mx-auto pb-24">
      <h1 className="text-2xl font-bold font-mono text-neon mb-6">Menu Lainnya</h1>
      
      <div className="space-y-4">
        <Link to="/journal" className="bg-dark p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-neon transition-colors group">
          <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400 group-hover:text-neon group-hover:bg-neon/20 transition-colors">
            <BookMarked size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold">Trading Journal</h2>
            <p className="text-sm text-gray-400">Catat histori dan evaluasi trading harianmu</p>
          </div>
        </Link>
        

        <Link to="/developer-content" className="bg-dark p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-neon transition-colors group">
          <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400 group-hover:text-neon group-hover:bg-neon/20 transition-colors">
            <Github size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold">Developer Content Editor</h2>
            <p className="text-sm text-gray-400">Edit materi dan gambar langsung ke GitHub repo pilihan</p>
          </div>
        </Link>
        
        <Link to="/settings" className="bg-dark p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-neon transition-colors group">
          <div className="bg-gray-700/50 p-3 rounded-lg text-gray-300 group-hover:text-neon group-hover:bg-neon/20 transition-colors">
            <SettingsIcon size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold">Settings & Backup</h2>
            <p className="text-sm text-gray-400">Atur AI Provider dan kelola data progresmu</p>
          </div>
        </Link>
        
        <Link to="/ai" className="bg-dark p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-neon transition-colors group">
          <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400 group-hover:text-neon group-hover:bg-neon/20 transition-colors">
            <Brain size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold">AI Evaluator (Classic)</h2>
            <p className="text-sm text-gray-400">Evaluasi analisis chart manual menggunakan AI</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
