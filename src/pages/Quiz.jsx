import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizData from '../data/quiz.json';
import { useStore } from '../store/useStore';
import { CheckCircle, XCircle, AlertTriangle, BookOpen, RefreshCw } from 'lucide-react';

export default function Quiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { progress, addXP, unlockLevel, saveQuizResult, levels } = useStore();
  
  const quiz = quizData.find(q => q.id === quizId);
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  if (!progress) return <div className="p-8 text-center text-neon animate-pulse">Loading...</div>;
  if (!quiz) return <div className="p-8 text-danger text-center mt-10">Quiz not found or not created yet for this level.</div>;

  const failCount = progress.quizFails?.[quizId] || 0;
  const isLocked = progress.lockedQuizzes?.includes(quizId);

  if (isLocked) {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-[70vh] pb-24 text-center">
        <AlertTriangle size={64} className="text-orange-500 mb-4 animate-pulse" />
        <h2 className="text-2xl font-bold font-mono text-orange-500 mb-4">Quiz Terkunci Sementara</h2>
        <p className="text-gray-300 mb-6 max-w-md">
          Kamu sudah gagal {failCount} kali. Sistem mengunci quiz ini agar kamu tidak menebak-nebak jawaban secara acak. 
          Silakan baca ulang materi remedial di bawah ini, kuis akan otomatis terbuka kembali setelah materi dibaca.
        </p>
        <div className="bg-darker p-4 rounded-xl border border-gray-800 w-full max-w-md text-left mb-6">
          <h3 className="font-bold text-neon mb-3 flex items-center gap-2"><BookOpen size={18} /> Materi Remedial:</h3>
          <ul className="space-y-2">
            {quiz.remedialLessons.map(lesson => (
              <li key={lesson} className="text-sm text-gray-400 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                {lesson.split('/')[1].replace(/^\d+-/, '').replace(/-/g, ' ')}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => navigate('/materi')} className="bg-darker border border-gray-700 hover:border-gray-500 text-white font-bold py-3 px-8 rounded-xl transition-colors">
          Kembali ke List Materi
        </button>
      </div>
    );
  }

  const question = quiz.questions[currentQ];

  const handleAnswer = (answerIdx) => {
    const newAnswers = [...userAnswers, answerIdx];
    setUserAnswers(newAnswers);

    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      handleFinish(newAnswers);
    }
  };

  const handleFinish = async (answers) => {
    setFinished(true);
    let score = 0;
    answers.forEach((ans, idx) => {
      if (ans === quiz.questions[idx].correctAnswer) score++;
    });
    
    // Check if passed
    const percentage = Math.round((score / quiz.questions.length) * 100);
    const isPassed = percentage >= quiz.passingScore;
    
    if (isPassed) {
      const previousResult = progress.quizResults?.[quizId];
      if (!previousResult?.passed) {
        await addXP(quiz.xpReward);
      }
      
      saveQuizResult(quizId, percentage, true, 0, false);
    } else {
      // Calculate new fail count manually before state updates via zustand
      const newFailCount = failCount + 1;
      const shouldLock = newFailCount >= 3;
      
      saveQuizResult(quizId, percentage, false, 1, shouldLock);
    }
  };

  if (finished) {
    let score = 0;
    userAnswers.forEach((ans, idx) => {
      if (ans === quiz.questions[idx].correctAnswer) score++;
    });
    const percentage = Math.round((score / quiz.questions.length) * 100);
    const passed = percentage >= quiz.passingScore;

    return (
      <div className="p-4 max-w-2xl mx-auto pb-24">
        <div className={`p-6 rounded-xl text-center mb-8 border-2 bg-dark ${passed ? 'glow-border-active border-neon' : 'glow-border-danger border-danger'}`}>
          <div className="flex justify-center mb-4">
            {passed ? <CheckCircle size={48} className="text-neon" /> : <XCircle size={48} className="text-danger" />}
          </div>
          <h2 className={`text-3xl font-bold font-mono mb-2 ${passed ? 'text-neon' : 'text-danger'}`}>
            {passed ? 'LULUS!' : 'GAGAL'}
          </h2>
          <p className="text-xl mb-2">Score: <span className="font-bold">{percentage}%</span></p>
          {!passed && <p className="text-gray-400 text-sm">Minimal kelulusan adalah {quiz.passingScore}%.</p>}
        </div>

        <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Review Jawaban</h3>
        <div className="space-y-4 mb-8">
          {quiz.questions.map((q, idx) => {
            const isCorrect = userAnswers[idx] === q.correctAnswer;
            return (
              <div key={idx} className={`p-4 rounded-xl border ${isCorrect ? 'bg-darker border-green-900/50' : 'bg-darker border-red-900/50'}`}>
                <p className="font-bold mb-2 flex items-start gap-2">
                  <span className="mt-1">{isCorrect ? '✅' : '❌'}</span> 
                  <span>{q.question}</span>
                </p>
                <div className="pl-6 text-sm">
                  <p className="text-gray-400 mb-2">Jawabanmu: <span className={isCorrect ? 'text-green-400' : 'text-red-400 line-through'}>
                    {q.type === 'true_false' ? (userAnswers[idx] ? 'Benar' : 'Salah') : q.options[userAnswers[idx]]}
                  </span></p>
                  {!isCorrect && (
                    <p className="text-neon mb-2">Jawaban Benar: {q.type === 'true_false' ? (q.correctAnswer ? 'Benar' : 'Salah') : q.options[q.correctAnswer]}</p>
                  )}
                  <p className="text-gray-300 bg-gray-800/50 p-3 rounded mt-2 border-l-2 border-blue-500">💡 {q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          {passed ? (
            <button onClick={() => navigate(`/essay/${quizId}`)} className="w-full bg-neon text-dark font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,255,170,0.4)]">
              <CheckCircle /> Lanjut ke Ujian Esai AI
            </button>
          ) : (
            <>
              {failCount + 1 >= 3 ? (
                <div className="bg-orange-900/20 border border-orange-500 p-4 rounded-xl text-center">
                  <AlertTriangle className="mx-auto text-orange-500 mb-2" />
                  <p className="text-orange-500 font-bold mb-4">Gagal 3 Kali. Kuis Terkunci!</p>
                  <button onClick={() => navigate('/materi')} className="w-full bg-darker border border-orange-500 text-orange-500 font-bold py-3 rounded-xl">
                    Baca Materi Remedial
                  </button>
                </div>
              ) : (
                <>
                  {failCount + 1 === 2 && (
                    <p className="text-orange-400 text-sm text-center font-bold animate-pulse">⚠️ Peringatan: 1 kegagalan lagi kuis ini akan dikunci sementara.</p>
                  )}
                  <div className="flex gap-4">
                    <button onClick={() => navigate('/materi')} className="flex-1 bg-darker border border-gray-700 hover:border-gray-500 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2">
                      <BookOpen size={18} /> Review Materi
                    </button>
                    <button 
                      onClick={() => {
                        setFinished(false);
                        setCurrentQ(0);
                        setUserAnswers([]);
                      }} 
                      className="flex-1 bg-danger text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-red-600"
                    >
                      <RefreshCw size={18} /> Coba Lagi
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-xl mx-auto pb-24">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-xl font-bold font-mono text-neon">{quiz.title}</h1>
        <span className="text-gray-400 text-sm font-mono bg-darker px-3 py-1 rounded-full border border-gray-800">
          Soal {currentQ + 1}/{quiz.questions.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 rounded-full h-2 mb-6">
        <div 
          className="bg-neon h-2 rounded-full transition-all duration-300" 
          style={{ width: `${((currentQ) / quiz.questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-dark p-6 rounded-xl border border-gray-800 shadow-xl">
        <h2 className="text-xl font-bold mb-8 leading-relaxed">{question.question || question.text}</h2>
        
        <div className="space-y-4">
          {(question.type === 'multiple_choice' || (question.options && !question.type)) && question.options.map((opt, idx) => (
            <button 
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="w-full text-left p-4 rounded-xl bg-darker border border-gray-700 hover:border-neon hover:text-neon transition-all hover:pl-6 group"
            >
              <span className="text-gray-500 mr-3 group-hover:text-neon font-mono">{String.fromCharCode(65 + idx)}.</span>
              {opt}
            </button>
          ))}

          {question.type === 'true_false' && (
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleAnswer(true)} 
                className="w-full text-center p-6 rounded-xl bg-darker border border-gray-700 hover:border-green-500 hover:text-green-500 transition-colors font-bold text-lg"
              >
                Benar
              </button>
              <button 
                onClick={() => handleAnswer(false)} 
                className="w-full text-center p-6 rounded-xl bg-darker border border-gray-700 hover:border-red-500 hover:text-red-500 transition-colors font-bold text-lg"
              >
                Salah
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
