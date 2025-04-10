import { motion } from 'framer-motion';
import { useState } from 'react';

const LoadingScreen = () => {
  const [imageError, setImageError] = useState(false);

  const spinTransition = {
    duration: 2,
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 2, // 2 second pause between animations
    ease: "easeInOut",
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', e);
    setImageError(true);
  };

  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-slate-900">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-center w-full h-full"
      >
        <motion.div
          className="w-32 h-32 bg-red-500/20 border border-white/20"
          animate={{
            rotate: [0, 720, 720, 720, 720],
          }}
          transition={spinTransition}
        >
          {imageError ? (
            <div className="text-white text-sm">Image not found</div>
          ) : (
            <img 
              src="src/assets/fergione_symbol.png" 
              alt="Fergione Symbol"
              className="w-full h-full object-contain"
              onError={handleImageError}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
