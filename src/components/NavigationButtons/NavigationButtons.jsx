import { motion } from 'framer-motion';

const NavigationButtons = ({ isVisible }) => {
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: i => ({
      opacity: 1,
      transition: {
        delay: 1 + (i * 0.2), // Increased initial delay to 3 seconds
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const buttons = [
    { id: 1, label: 'Angelo', image: 'src/assets/angelo.png' },
    { id: 2, label: 'Jacqui', image: 'src/assets/jacqui.png' },
    { id: 3, label: 'The Fergs', image: 'src/assets/fergs.png' },
    { id: 4, label: 'Bagoombas', image: 'src/assets/bagoombas.png' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .8, duration: 0.5 }} // Container fade-in before buttons
      className="flex justify-center items-center px-6"
    >
      <div className="flex flex-wrap flex-row gap-10 justify-center">
        {buttons.map((button, i) => (
          <motion.div
            key={button.id}
            custom={i}
            variants={buttonVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="relative w-[250px] h-[250px] group rounded-2xl overflow-hidden 
                     border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm
                     hover:border-white/40 transition-all duration-300
                     hover:shadow-2xl"
          >
            <img
              src={button.image}
              alt={button.label}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl font-playfair">{button.label}</span>
            </div>
          </motion.div>
        ))} 
      </div>
    </motion.div>
  );
};

export default NavigationButtons;
