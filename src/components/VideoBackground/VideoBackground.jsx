import { motion } from 'framer-motion';

const VideoBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-0 bg-slate-900"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-80"
      >
        <source src="/assets/background-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/20" />
    </motion.div>
  );
};

export default VideoBackground;