import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import aiEssayData from '../data/ai-essay-quizzes.json';
import { useStore } from '../store/useStore';
import { getSettings } from '../services/db';
import { evaluateAnswer } from '../services/ai';
import { CheckCircle, XCircle, AlertTriangle, BookOpen, Brain, Loader2 } from 'lucide-react';

export default function AiEssayExam() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { progress, unlockLevel, saveEssayResult, levels } = useStore();
  
  // Find the essay quiz that corresponds to this quizId
  const quiz = aiEssayData ? aiEssayData.find(q => q.quizId === quizId || q.id === quizId) : null;
  
  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Check if already passed in progress
  useEffect(() => {
    if (progress?.essayResults?.[quizId]?.passed) {
      setResult({
        passed: true,
        score: progress.essayResults[quizId].score,
        feedback: progress.essayResults[quizId].feedback
      });
    }
  }, [progress, quizId]);

  if (!progress) return <div className="p-8 text-center text-neon animate-pulse">Loading...</div>;
  if (!quiz) return <div className="p-8 text-danger text-center mt-10">AI Essay belum tersedia untuk kuis ini.</div>;

  const handleTextChange = (qId, text) => {
    setAnswers(prev => ({ ...prev, [qId]: text }));
  };

  const handleSubmit = async () => {
    // Validate all questions answered
    const allAnswered = quiz.questions.every(q => answers[q.id] && answers[q.id].trim().length > 10);
    if (!allAnswered) {
      setError('Mohon jawab semua pertanyaan dengan detail (minimal beberapa kata).');
      return;
    }
    
    setError('');
    setSubmitting(true);
    
    try {
      const aiConfig = await getSettings();
      
      let compiledUserAnswer = "";
      quiz.questions.forEach((q, idx) => {
        compiledUserAnswer += `\n\n--- Pertanyaan ${idx + 1} ---\n`;
        compiledUserAnswer += `Tanya: ${q.prompt}\n`;
        compiledUserAnswer += `Konsep yang diharapkan: ${q.expectedConcepts ? q.expectedConcepts.join(', ') : ''}\n`;
        compiledUserAnswer += `Jawaban User: ${answers[q.id]}\n`;
      });

      const promptText = `Ini adalah ujian esai akhir untuk level ${quiz.levelId}. Evaluasi pemahaman user secara keseluruhan dari gabungan jawaban berikut. Passing score kuis ini adalah ${quiz.passingScore}.`;
      
      const rubricString = `
        EXCELLENT (Score 90-100): ${quiz.rubric?.excellent || 'Sangat baik'}
        PASS (Score 75-89): ${quiz.rubric?.pass || 'Cukup baik'}
        FAIL (Score 0-74): ${quiz.rubric?.fail || 'Gagal'}
      `;

      const aiResponse = await evaluateAnswer(aiConfig, rubricString, promptText, compiledUserAnswer);
      
      // Override passed boolean based on our exact strict rule
      const actualScore = aiResponse.score || 0;
      const actualPassed = actualScore >= quiz.passingScore;
      
      setResult({
        ...aiResponse,
        score: actualScore,
        passed: actualPassed,
        feedback: aiResponse.feedback || "Evaluasi selesai."
      });

      await saveEssayResult(quizId, actualScore, actualPassed, aiResponse.feedback);

      if (actualPassed) {
        const currentLevel = levels.find(l => l.id === quiz.levelId);
        if (currentLevel && currentLevel.nextLevel) {
          await unlockLevel(currentLevel.nextLevel);
        }
      }
      
    } catch (err) {
      setError(err.message || 'Gagal terhubung ke AI. Pastikan API key sudah diisi di Settings.');
    } finally {
      setSubmitting(false);
    }
  };

  if (result) {
    const passed = result.passed;
    return (
      <div className="p-4 max-w-2xl mx-auto pb-24">
        <div className={`p-6 rounded-xl text-center mb-8 border-2 bg-dark ${passed ? 'glow-border-active border-neon' : 'glow-border-danger border-danger'}`}>
          <div className="flex justify-center mb-4">
            {passed ? <CheckCircle size={48} className="text-neon" /> : <XCircle size={48} className="text-danger" />}
          </div>
          <h2 className={`text-3xl font-bold font-mono mb-2 ${passed ? 'text-neon' : 'text-danger'}`}>
            {passed ? 'ESAI LULUS!' : 'ESAI GAGAL'}
          </h2>
          <p className="text-xl mb-2">AI Score: <span className="font-bold">{result.score}/100</span></p>
          {!passed && <p className="text-gray-400 text-sm">Minimal kelulusan adalah {quiz.passingScore}.</p>}
        </div>

        <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2 flex items-center gap-2">
          <Brain className="text-purple-500" /> AI Feedback
        </h3>
        <div className="bg-darker p-6 rounded-xl border border-gray-800 mb-8 whitespace-pre-line leading-relaxed text-gray-300 text-lg">
          {result.feedback}
        </div>
        
        {(!passed && quiz.remedialLessons?.length > 0) && (
          <div className="bg-orange-900/20 border border-orange-500 p-6 rounded-xl mb-8">
            <h3 className="font-bold text-orange-500 mb-3 flex items-center gap-2"><BookOpen size={18} /> Materi Remedial (Wajib Dibaca Ulang):</h3>
            <ul className="space-y-2">
              {quiz.remedialLessons.map(lesson => (
                <li key={lesson} className="text-sm text-gray-300 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  {lesson.split('/')[1]?.replace(/^\d+-/, '').replace(/-/g, ' ') || lesson}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-4">
          {passed ? (
            <button onClick={() => navigate('/quest')} className="w-full bg-neon text-dark font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-white transition-colors">
              <CheckCircle /> Lanjut ke Map Berikutnya
            </button>
          ) : (
            <div className="flex gap-4">
              <button onClick={() => navigate('/materi')} className="flex-1 bg-darker border border-gray-700 hover:border-gray-500 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2">
                <BookOpen size={18} /> Review Materi
              </button>
              <button 
                onClick={() => {
                  setResult(null);
                  setAnswers({});
                }} 
                className="flex-1 bg-danger text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-red-600"
              >
                Coba Lagi
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-2xl mx-auto pb-24">
      <div className="mb-8 text-center">
        <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
          <Brain size={32} className="text-purple-400" />
        </div>
        <h1 className="text-2xl font-bold font-mono text-neon mb-2">{quiz.title}</h1>
        <p className="text-gray-400">Tahap Akhir: Evaluasi Pemahaman Mendalam (Esai)</p>
      </div>

      {error && (
        <div className="bg-danger/20 border border-danger text-danger p-4 rounded-xl mb-6 flex items-start gap-3">
          <AlertTriangle className="flex-shrink-0 mt-0.5" size={18} />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-8">
        {quiz.questions.map((q, idx) => (
          <div key={q.id} className="bg-dark p-6 rounded-xl border border-gray-800 shadow-xl focus-within:border-neon focus-within:glow-border-active transition-all">
            <h2 className="text-lg font-bold mb-4 leading-relaxed flex gap-3">
              <span className="text-neon bg-neon/10 w-8 h-8 rounded flex items-center justify-center flex-shrink-0">{idx + 1}</span>
              {q.prompt}
            </h2>
            <textarea
              className="w-full bg-darker border border-gray-700 rounded-lg p-4 text-gray-200 min-h-[150px] outline-none focus:border-neon transition-colors resize-y leading-relaxed"
              placeholder="Tuliskan jawaban lengkapmu di sini..."
              value={answers[q.id] || ''}
              onChange={(e) => handleTextChange(q.id, e.target.value)}
              disabled={submitting}
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button 
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-all shadow-[0_0_15px_rgba(147,51,234,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <><Loader2 className="animate-spin" size={20} /> AI Sedang Mengevaluasi...</>
          ) : (
            <><Brain size={20} /> Kirim Jawaban ke AI Examiner</>
          )}
        </button>
        <p className="text-center text-xs text-gray-500 mt-4">
          Jawabanmu akan dinilai secara objektif oleh AI berdasarkan rubrik edukasi trading.
        </p>
      </div>
    </div>
  );
}
