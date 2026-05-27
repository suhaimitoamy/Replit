import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AccessGate from './components/AccessGate';
import Home from './pages/Home';
import QuestMap from './pages/QuestMap';
import Materi from './pages/Materi';
import LessonReader from './pages/LessonReader';
import Quiz from './pages/Quiz';
import AiEvaluator from './pages/AiEvaluator';
import Progress from './pages/Progress';
import Journal from './pages/Journal';
import Settings from './pages/Settings';
import MoreMenu from './pages/MoreMenu';
import AiEssayExam from './pages/AiEssayExam';
import DeveloperContentEditor from './pages/DeveloperContentEditor';
import { useStore } from './store/useStore';
import TouchParticles from './components/TouchParticles';

function App() {
  const settings = useStore((state) => state.settings);
  const loadSettings = useStore((state) => state.loadSettings);

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  return (
    <div data-theme={settings.visualTheme || 'neon-green'} className="min-h-screen text-gray-100 font-sans">
      <TouchParticles effect={settings.touchEffect} />
      <AccessGate>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quest" element={<QuestMap />} />
              <Route path="/materi" element={<Materi />} />
              <Route path="/lesson/:lessonId" element={<LessonReader />} />
              <Route path="/quiz/:quizId" element={<Quiz />} />
              <Route path="/ai" element={<AiEvaluator />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/more" element={<MoreMenu />} />
              <Route path="/essay/:quizId" element={<AiEssayExam />} />
              <Route path="/developer-content" element={<DeveloperContentEditor />} />
            </Routes>
          </Layout>
        </Router>
      </AccessGate>
    </div>
  );
}

export default App;
