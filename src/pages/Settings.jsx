import { useState, useEffect, useRef } from 'react';
import { exportData, importData } from '../services/db';
import { useStore } from '../store/useStore';
import { Save, Download, Upload, AlertCircle } from 'lucide-react';

export default function Settings() {
  const storeSettings = useStore((state) => state.settings);
  const updateSettings = useStore((state) => state.updateSettings);
  
  const [settings, setSettings] = useState(storeSettings);
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef();
  const progress = useStore((state) => state.progress);

  useEffect(() => {
    setSettings(storeSettings);
  }, [storeSettings]);

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSave = async () => {
    await updateSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleExport = async () => {
    try {
      const dataStr = await exportData();
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `amy_quest_backup_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setMessage('Backup berhasil didownload.');
    } catch (err) {
      setMessage('Gagal export data.');
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImport = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        await importData(event.target.result);
        setMessage('Restore berhasil! Silakan muat ulang (refresh) halaman.');
      } catch (err) {
        setMessage('Gagal import data. File tidak valid.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-4 max-w-xl mx-auto pb-24">
      <h1 className="text-2xl font-bold font-mono text-neon mb-6">Settings</h1>

      <div className="space-y-6">
        <div className="bg-dark p-6 rounded-xl border border-gray-800 space-y-4">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">AI Config</h2>
          
          <div>
            <label className="block text-sm text-gray-400 mb-1">Provider</label>
            <select 
              name="aiProvider" 
              value={settings.aiProvider}
              onChange={handleChange}
              className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-neon"
            >
              <option value="OpenRouter">OpenRouter (Default)</option>
              <option value="Gemini">Gemini</option>
              <option value="DeepSeek">DeepSeek</option>
              <option value="OpenAI">OpenAI</option>
              <option value="Claude">Claude</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">API Key</label>
            <input 
              type="password"
              name="apiKey"
              value={settings.apiKey}
              onChange={handleChange}
              placeholder="sk-or-v1-..."
              className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-neon"
            />
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> Disimpan lokal, tidak dikirim ke server kita.
            </p>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Model</label>
            <input 
              type="text"
              name="model"
              value={settings.model}
              onChange={handleChange}
              placeholder="openrouter/auto"
              className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-neon"
            />
          </div>

          <button 
            onClick={handleSave}
            className="w-full bg-neon text-dark font-bold py-3 rounded-lg flex items-center justify-center gap-2 mt-4 hover:bg-white transition-colors"
          >
            <Save size={20} />
            {saved ? 'Tersimpan!' : 'Simpan Settings'}
          </button>
        </div>

        <div className="bg-dark p-6 rounded-xl border border-gray-800 space-y-4">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Cosmetic UI</h2>
          
          <div>
            <label className="block text-sm text-gray-400 mb-1">Visual Theme</label>
            <select 
              name="visualTheme" 
              value={settings.visualTheme || 'neon-green'}
              onChange={handleChange}
              className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-neon"
            >
              <option value="neon-green">Neon Green</option>
              <option value="cyber-blue">Cyber Blue</option>
              <option value="purple-magic">Purple Magic</option>
              <option value="gold-premium">Gold Premium</option>
              <option value="rainbow-aura">Rainbow Aura</option>
              <option value="snow-calm">Snow Calm</option>
              <option value="firefly-night">Firefly Night</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Touch Effect</label>
            <select 
              name="touchEffect" 
              value={settings.touchEffect || 'Firefly'}
              onChange={handleChange}
              className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-neon"
            >
              <option value="Off">Off</option>
              <option value="Firefly">Firefly</option>
              <option value="Rainbow Sparkle">Rainbow Sparkle</option>
              <option value="Snow Particles">Snow Particles</option>
              <option value="Magic Trail">Magic Trail</option>
            </select>
          </div>
          
          <button 
            onClick={handleSave}
            className="w-full bg-neon text-dark font-bold py-3 rounded-lg flex items-center justify-center gap-2 mt-4 hover:bg-white transition-colors"
          >
            <Save size={20} />
            {saved ? 'Tersimpan!' : 'Simpan Settings'}
          </button>
        </div>

        <div className="bg-dark p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Backup & Restore</h2>
          <p className="text-sm text-gray-400 mb-4">
            Progress dan jurnal Anda disimpan di browser (IndexedDB). Lakukan backup berkala.
          </p>
          
          <div className="flex gap-4">
            <button onClick={handleExport} className="flex-1 bg-darker text-blue-400 border border-gray-700 py-3 rounded-lg hover:border-blue-400 flex justify-center items-center gap-2">
              <Download size={18} /> Export JSON
            </button>
            <input type="file" accept=".json" ref={fileInputRef} onChange={handleImport} className="hidden" />
            <button onClick={handleImportClick} className="flex-1 bg-darker text-orange-400 border border-gray-700 py-3 rounded-lg hover:border-orange-400 flex justify-center items-center gap-2">
              <Upload size={18} /> Import JSON
            </button>
          </div>
          
          {message && <p className="mt-4 text-sm text-center text-gray-300 bg-gray-800 p-2 rounded">{message}</p>}
        </div>

        <div className="bg-dark p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2 text-danger">Akses Aplikasi</h2>
          <p className="text-sm text-gray-400 mb-4">
            Keluar dari aplikasi dan ganti kode akses member Anda.
          </p>
          <button 
            onClick={() => {
              localStorage.removeItem('amy_trading_quest_access_granted');
              window.location.reload();
            }} 
            className="w-full bg-danger/10 text-danger border border-danger py-3 rounded-lg hover:bg-danger hover:text-white flex justify-center items-center gap-2 transition-colors"
          >
            <AlertCircle size={18} /> Keluar / Ganti Kode
          </button>
        </div>
      </div>
    </div>
  );
}
