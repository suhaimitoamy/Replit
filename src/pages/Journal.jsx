import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { getJournals, saveJournal, updateJournal, deleteJournal } from '../services/db';
import { BookMarked, Plus, Calendar, Edit3, Trash2, Save } from 'lucide-react';

export default function Journal() {
  const [journals, setJournals] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newEntry, setNewEntry] = useState({ title: '', content: '' });
  const { progress, loadProgress } = useStore();

  useEffect(() => {
    loadProgress();
    loadEntries();
  }, [loadProgress]);

  const loadEntries = async () => {
    const data = await getJournals();
    // Sort by date desc
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
    setJournals(data);
  };

  const handleSave = async () => {
    if (!newEntry.title.trim() || !newEntry.content.trim()) return;
    
    if (editingId) {
      await updateJournal({ ...newEntry, id: editingId });
    } else {
      await saveJournal(newEntry);
    }
    
    setNewEntry({ title: '', content: '' });
    setIsAdding(false);
    setEditingId(null);
    loadEntries();
  };

  const handleEdit = (entry) => {
    setNewEntry({ title: entry.title, content: entry.content, date: entry.date });
    setEditingId(entry.id);
    setIsAdding(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus jurnal ini?')) {
      await deleteJournal(id);
      loadEntries();
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setNewEntry({ title: '', content: '' });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold font-mono text-neon flex items-center gap-2">
          <BookMarked /> Trading Journal
        </h1>
        <button 
          onClick={isAdding ? handleCancel : () => setIsAdding(true)}
          className="bg-darker p-2 rounded-lg border border-gray-700 hover:border-neon text-neon"
        >
          {isAdding ? 'Batal' : <Plus size={20} />}
        </button>
      </div>

      {isAdding && (
        <div className="bg-dark p-4 rounded-xl border border-neon glow-border space-y-4">
          <input 
            type="text" 
            placeholder="Judul / Topik Pembelajaran"
            value={newEntry.title}
            onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
            className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-neon font-bold"
          />
          <textarea 
            placeholder="Catatan kesalahan, pemahaman baru, atau aturan trading yang dilanggar..."
            rows="5"
            value={newEntry.content}
            onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
            className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-neon"
          />
          <button 
            onClick={handleSave}
            className="w-full bg-neon text-dark font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <Save size={20} /> {editingId ? 'Update Catatan' : 'Simpan Catatan'}
          </button>
        </div>
      )}

      <div className="space-y-4">
        {journals.length === 0 && !isAdding && (
          <div className="text-center text-gray-500 p-8 bg-dark rounded-xl border border-gray-800">
            Belum ada catatan. Mulai tulis jurnal belajar Anda!
          </div>
        )}

        {journals.map((entry) => (
          <div key={entry.id} className="bg-dark p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors group">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-white">{entry.title}</h3>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar size={12} /> {new Date(entry.date).toLocaleDateString()}
                </span>
                <button onClick={() => handleEdit(entry)} className="text-blue-400 hover:text-blue-300 opacity-50 hover:opacity-100 transition-opacity">
                  <Edit3 size={16} />
                </button>
                <button onClick={() => handleDelete(entry.id)} className="text-danger hover:text-red-400 opacity-50 hover:opacity-100 transition-opacity">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <p className="text-gray-300 text-sm whitespace-pre-wrap">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
