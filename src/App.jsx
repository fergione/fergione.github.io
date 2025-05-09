import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import VideoBackground from './components/VideoBackground/VideoBackground';
import AnimationPanel from './components/AnimationPanel/AnimationPanel';
import FamilyPages from './pages/FamilyPages/FamilyPages';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-hidden">
        <VideoBackground />
        <div className="relative z-10">
          <AnimationPanel />
        </div>
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/family-pages" element={<FamilyPages />} />
          <Route path="/family-tree" element={<div>Family Tree Page</div>} />
          <Route path="/gallery" element={<div>Photo Gallery Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
