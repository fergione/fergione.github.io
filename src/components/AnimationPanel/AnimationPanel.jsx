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

  const navLinks = [
    { title: 'Family Tree', href: '/family-tree' },
    { title: 'Family Pages', href: '/family-pages' },
    { title: 'Photo Gallery', href: '/gallery' },
    { title: 'Contact', href: '/contact' },
  ];

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
      className="fixed top-0 left-0 right-0 z-10 bg-black/20 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-center mb-4 md:mb-0">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-3xl md:text-4xl
                         text-white/90
                         tracking-wider"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  letterSpacing: '0.1em'
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 2.5 + (index * 0.1),
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white
                             text-sm md:text-base
                             tracking-wide uppercase
                             transition-colors duration-300
                             border-b-2 border-transparent
                             hover:border-white/30"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimationPanel;
