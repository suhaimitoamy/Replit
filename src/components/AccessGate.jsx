import React, { useState, useEffect } from 'react';
import accessCodes from '../data/access-codes.json';
import { Lock, Unlock, AlertCircle } from 'lucide-react';

export default function AccessGate({ children }) {
  const [accessGranted, setAccessGranted] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const isGranted = localStorage.getItem('amy_trading_quest_access_granted');
    if (isGranted === 'true') {
      setAccessGranted(true);
    }
  }, []);

  const handleAccess = (e) => {
    e.preventDefault();
    const codeData = accessCodes.find(item => item.code === inputCode.trim());
    
    if (codeData && codeData.active) {
      localStorage.setItem('amy_trading_quest_access_granted', 'true');
      setAccessGranted(true);
      setError('');
    } else {
      setError('Kode akses salah atau tidak aktif.');
    }
  };

  if (accessGranted) {
    return children;
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
      <div className="bg-darker p-8 rounded-2xl border border-neon glow-border max-w-md w-full shadow-2xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-50"></div>
        
        <div className="bg-neon/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-neon/30">
          <Lock size={32} className="text-neon" />
        </div>
        
        <h1 className="text-3xl font-bold font-mono text-neon mb-2 tracking-tight">Amy Trading Quest</h1>
        <p className="text-gray-400 mb-8 font-sans">Masukkan kode akses member</p>
        
        <form onSubmit={handleAccess} className="space-y-6">
          <div>
            <input 
              type="text" 
              placeholder="AMY-DL-XXX-XXX"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value.toUpperCase())}
              className="w-full bg-dark border-2 border-gray-700 rounded-xl p-4 text-white text-center font-mono text-lg outline-none focus:border-neon transition-colors"
            />
          </div>
          
          {error && (
            <div className="flex items-center justify-center gap-2 text-danger bg-danger/10 p-3 rounded-lg border border-danger/20">
              <AlertCircle size={18} />
              <span className="text-sm font-bold">{error}</span>
            </div>
          )}
          
          <button 
            type="submit" 
            className="w-full bg-neon text-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] transition-all"
          >
            <Unlock size={20} /> Masuk Aplikasi
          </button>
        </form>
        
        <p className="text-gray-600 text-xs mt-8">
          Khusus member/downline yang memiliki izin akses.
        </p>
      </div>
    </div>
  );
}
