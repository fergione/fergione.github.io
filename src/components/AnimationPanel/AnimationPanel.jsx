import { motion } from 'framer-motion';

const AnimationPanel = ({ onAnimationComplete }) => {
  const text = "Casa Fergione";
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5 + (i * 0.1),
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };

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
      className="absolute top-[10vh] left-1/2 -translate-x-1/2 z-10"
    >
      <div className="bg-black/30 backdrop-blur-lg px-16 py-12 rounded-2xl 
                    border border-white/10 shadow-2xl
                    hover:border-gold-500/30 transition-all duration-500
                    hover:shadow-gold-500/20 hover:shadow-xl">
        <h1 className="relative leading-[1.2]">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block font-serif text-6xl md:text-7xl lg:text-8xl font-bold
                       bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 
                       bg-clip-text text-transparent
                       drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      </div>
    </motion.div>
  );
};

export default AnimationPanel;
