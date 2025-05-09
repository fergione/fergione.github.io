import { useEffect, useState } from 'react';
import App from './App';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function Scaffold() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden">
        <LoadingScreen />
      </div>
    );
  }

  return <App />; // ⬅️ No loading logic in App
}

export default Scaffold;
