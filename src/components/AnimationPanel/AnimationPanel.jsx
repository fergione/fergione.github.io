import { motion } from 'framer-motion';

const AnimationPanel = ({ onAnimationComplete }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 1.5,
        delay: 1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      onAnimationComplete={onAnimationComplete}
      className="absolute top-[5vh] left-1/2 -translate-x-1/2 z-10"
    >
      <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl 
                    border border-white/20 shadow-xl">
        <h1 className="text-xl md:text-2xl font-bold mb-1
                     bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          The Fergs
        </h1>
        <p className="text-white/90 text-sm md:text-base">
          Choose your destination
        </p>
      </div>
    </motion.div>
  );
};

export default AnimationPanel;
