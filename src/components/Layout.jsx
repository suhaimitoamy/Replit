import { Link, useLocation } from 'react-router-dom';
import { Map, Home, BookOpen, Activity, LayoutGrid } from 'lucide-react';

export default function Layout({ children }) {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/quest', icon: Map, label: 'Quest' },
    { path: '/materi', icon: BookOpen, label: 'Materi' },
    { path: '/progress', icon: Activity, label: 'Progress' },
    { path: '/more', icon: LayoutGrid, label: 'More' }
  ];

  return (
    <div className="min-h-screen bg-darker text-gray-100 flex flex-col font-sans">
      <main className="flex-1 pb-20 overflow-y-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-dark border-t border-gray-800 flex justify-around p-2 z-50 overflow-x-auto whitespace-nowrap hide-scrollbar">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`flex flex-col items-center p-2 rounded-lg transition-all flex-shrink-0 mx-1 ${
                isActive ? 'text-neon glow-text' : 'text-gray-500 hover:text-gray-300'
              }`}
              style={{ minWidth: '60px' }}
            >
              <Icon size={20} className={isActive ? 'glow-text' : ''} />
              <span className="text-[10px] mt-1 font-mono">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
