import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { evaluateAnswer } from '../services/ai';
import { getSettings } from '../services/db';
import levelsData from '../data/levels.json';
import { Bot, Send, Loader, CheckCircle, XCircle, ImagePlus, X } from 'lucide-react';

export default function AiEvaluator() {
  const { progress, loadProgress, selectedLevel } = useStore();
  const [levelId, setLevelId] = useState(levelsData[0].aiRubricId);
  const [userAnswer, setUserAnswer] = useState('');
  const [imageBase64, setImageBase64] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError('Ukuran gambar maksimal 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
        setError('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEvaluate = async () => {
    if (!userAnswer.trim() && !imageBase64) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const config = await getSettings();
      const level = levelsData.find(l => l.aiRubricId === levelId);
      let rubric = level ? level.theme + " " + level.description : levelId;
      
      const prompt = `
Level User: ${progress.rank} (XP: ${progress.totalXP})
Level yang sedang dievaluasi: ${selectedLevel || levelId}
Rubrik: ${rubric}

Silakan bertindak sebagai Mentor Trading (Amy) yang tegas tapi suportif. Evaluasi jawaban ini berdasarkan rubrik di atas.`;
      
      let finalAnswer = userAnswer;
      if (imageBase64) {
        finalAnswer += `\n[Image Data: ${imageBase64}]`;
      }
      
      const evalResult = await evaluateAnswer(config, rubric, prompt, finalAnswer);
      setResult(evalResult);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat menghubungi AI. Pastikan API Key valid.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6 pb-24">
      <div className="text-center mb-6">
        <Bot size={48} className="mx-auto text-neon mb-2 glow-text" />
        <h1 className="text-2xl font-bold font-mono text-neon">AI Evaluator</h1>
        <p className="text-sm text-gray-400 mt-1">Mentor trading personalmu (Bukan pemberi sinyal).</p>
      </div>

      <div className="bg-dark p-4 rounded-xl border border-gray-800 space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Pilih Rubrik Level</label>
          <select 
            value={levelId}
            onChange={(e) => setLevelId(e.target.value)}
            className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white outline-none"
          >
            {levelsData.map(l => (
              <option key={l.id} value={l.aiRubricId}>{l.aiRubricId}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Jawaban / Analisamu</label>
          <textarea 
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            rows="5"
            placeholder="Misal: Saya melihat harga terus membuat higher high dan higher low..."
            className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-neon"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Upload Chart (Opsional)</label>
          {imageBase64 ? (
            <div className="relative inline-block">
              <img src={imageBase64} alt="Chart Upload" className="h-32 rounded-lg border border-gray-700" />
              <button 
                onClick={() => setImageBase64(null)} 
                className="absolute -top-2 -right-2 bg-danger text-white rounded-full p-1"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="relative">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="bg-darker border border-dashed border-gray-700 rounded-lg p-6 text-center text-gray-500 hover:border-neon hover:text-neon transition-colors">
                <ImagePlus className="mx-auto mb-2" size={24} />
                <span className="text-sm">Klik untuk upload screenshot chart (Maks 2MB)</span>
              </div>
            </div>
          )}
        </div>

        <button 
          onClick={handleEvaluate}
          disabled={loading || (!userAnswer.trim() && !imageBase64)}
          className="w-full bg-neon text-dark font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white disabled:opacity-50 transition-colors"
        >
          {loading ? <Loader className="animate-spin" /> : <Send size={20} />}
          {loading ? 'Mengevaluasi...' : 'Evaluasi Sekarang'}
        </button>

        {error && <p className="text-danger mt-4 text-sm text-center">{error}</p>}
      </div>

      {result && (
        <div className={`p-6 rounded-xl border-2 ${result.passed ? 'border-neon glow-border' : 'border-danger glow-border-danger'} bg-dark`}>
          <div className="flex items-center gap-3 mb-4 border-b border-gray-800 pb-4">
            {result.passed ? <CheckCircle className="text-neon" size={32} /> : <XCircle className="text-danger" size={32} />}
            <div>
              <h2 className="text-xl font-bold">{result.passed ? 'Passed!' : 'Needs Work'}</h2>
              <p className="text-sm opacity-80">Score: {result.score}/100</p>
            </div>
          </div>
          
          <div className="prose prose-invert prose-sm">
            <p>{result.feedback}</p>
            
            {result.correct_points && result.correct_points.length > 0 && (
              <>
                <h4 className="text-neon mt-4 mb-2">✅ Poin Bagus:</h4>
                <ul className="list-disc pl-5">
                  {result.correct_points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </>
            )}

            {result.wrong_points && result.wrong_points.length > 0 && (
              <>
                <h4 className="text-danger mt-4 mb-2">❌ Perlu Diperbaiki:</h4>
                <ul className="list-disc pl-5">
                  {result.wrong_points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
