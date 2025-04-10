import { motion } from 'framer-motion';

const NavigationButtons = ({ isVisible }) => {
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
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
    <div className="flex justify-center items-center min-h-screen px-6">
      <div className="flex flex-wrap flex-row gap-10">
        {buttons.map((button, i) => (
          <motion.div
            key={button.id}
            custom={i}
            variants={buttonVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="relative w-[250px] h-[250px] group rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm"
          >
            <img
              src={button.image}
              alt={button.label}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
            />
          </motion.div>
        ))} 
      </div>
    </div>
  );
};

export default NavigationButtons;
