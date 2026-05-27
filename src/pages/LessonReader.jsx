import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useStore } from '../store/useStore';
import { resolvePublicAssetPath } from '../utils/developerMode';

export default function LessonReader() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { levels, completeLesson, progress, saveChecklist } = useStore();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const decodedLessonId = decodeURIComponent(lessonId || '');
  const level = levels.find(l => l.lessons && l.lessons.includes(decodedLessonId));

  const isAlreadyDone = progress?.completedLessons?.includes(decodedLessonId) || false;

  useEffect(() => {
    const loadLesson = async () => {
      try {
        setLoading(true);
        const modules = import.meta.glob('../lessons/**/*.md', { query: '?raw', import: 'default' });
        const path = `../lessons/${decodedLessonId}.md`;
        
        if (modules[path]) {
          const mdContent = await modules[path]();
          setContent(mdContent);
        } else {
          setContent('');
        }
      } catch (err) {
        console.error("Failed to load lesson", err);
        setContent('');
      } finally {
        setLoading(false);
      }
    };
    
    loadLesson();
  }, [decodedLessonId]);



  const handleComplete = async () => {
    await completeLesson(decodedLessonId, 10);

    if (!level) {
      navigate('/materi');
      return;
    }

    const currentIndex = level.lessons.indexOf(decodedLessonId);
    if (currentIndex !== -1 && currentIndex < level.lessons.length - 1) {
      const nextLesson = level.lessons[currentIndex + 1];
      navigate(`/lesson/${encodeURIComponent(nextLesson)}`);
    } else {
      navigate(`/quiz/${level.quizId}`);
    }
  };

  if (loading) return <div className="p-8 text-center text-neon animate-pulse">Loading materi...</div>;

  const isError = !content;
  
  function resolveAssetPath(src) {
    return resolvePublicAssetPath(src);
  }
  
  const RenderedMarkdown = () => {
    return (
      <ReactMarkdown
        components={{
          // Blockquote styling (Cards)
          blockquote: ({node, ...props}) => {
            return (
              <div 
                className="bg-darker p-5 border-l-4 border-neon rounded-lg my-6 shadow-lg text-gray-300" 
                {...props} 
              />
            );
          },
          // List item styling
          li: ({node, ...props}) => {
            return (
              <li className="ml-4 list-disc" {...props} />
            );
          },
          // Image styling
          img: ({node, ...props}) => {
            const { src, alt, ...restProps } = props;
            return (
              <div className="flex justify-center my-8">
                <img 
                  className="max-w-full w-full h-auto rounded-xl shadow-[0_0_20px_rgba(0,255,170,0.1)] border border-gray-800" 
                  alt={alt || "Ilustrasi Trading"}
                  src={resolveAssetPath(src)}
                  {...restProps} 
                />
              </div>
            );
          },
          // Heading styling
          h1: ({node, ...props}) => <h1 className="text-3xl font-bold font-mono text-neon mb-6 border-b border-gray-800 pb-4" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-10 mb-4" {...props} />
        }}
      >
        {content}
      </ReactMarkdown>
    );
  };

  return (
    <div className="p-4 max-w-2xl mx-auto pb-24">
      {isError ? (
        <div className="bg-dark p-6 rounded-xl border border-danger glow-border-danger text-center">
          <h2 className="text-xl font-bold font-mono text-danger mb-4">Gagal memuat materi!</h2>
          <p className="text-gray-300 mb-2">Sistem tidak dapat menemukan file materi:</p>
          <code className="bg-darker text-sm p-2 rounded block mb-6 text-gray-500">
            {decodedLessonId}.md
          </code>
          <button 
            onClick={() => navigate('/materi')}
            className="w-full bg-darker text-gray-300 font-bold py-3 rounded-xl border border-gray-700 hover:border-gray-500 transition-colors"
          >
            Kembali ke List Materi
          </button>
        </div>
      ) : (
        <div className="bg-dark p-6 rounded-2xl border border-gray-800 shadow-2xl">
          <div className="prose prose-invert prose-neon max-w-none font-sans prose-p:text-gray-300 prose-p:leading-relaxed">
            <RenderedMarkdown />
          </div>
        </div>
      )}
      
      {!isError && (
        <div className="mt-8 flex justify-between gap-4">
          <button 
            onClick={() => navigate('/materi')}
            className="flex-1 bg-darker text-gray-300 font-bold py-4 rounded-xl border border-gray-700 hover:border-gray-500 transition-colors"
          >
            Kembali
          </button>
          <button 
            onClick={handleComplete}
            className={`flex-2 px-8 font-bold py-4 rounded-xl transition-all font-mono text-lg ${
              isAlreadyDone 
                ? 'bg-darker border border-neon text-neon hover:bg-neon hover:text-dark'
                : 'bg-neon text-dark glow-border-active hover:bg-white hover:scale-105'
            }`}
          >
            {isAlreadyDone ? 'Lanjut' : 'Selesai & Lanjut'}
          </button>
        </div>
      )}
    </div>
  );
}
