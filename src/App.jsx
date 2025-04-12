import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import VideoBackground from './components/VideoBackground/VideoBackground';
import AnimationPanel from './components/AnimationPanel/AnimationPanel';
import NavigationButtons from './components/NavigationButtons/NavigationButtons';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPanel, setShowPanel] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowPanel(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePanelAnimationComplete = () => {
    setShowButtons(true);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <VideoBackground />
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="relative z-10">
        {showPanel && (
          <AnimationPanel onAnimationComplete={handlePanelAnimationComplete} />
        )}
        {showButtons && <NavigationButtons isVisible={showButtons} />}
      </div>
    </div>
  );
}

export default App;
