'use client';
import { motion } from 'framer-motion';

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Wave 1 */}
      <motion.div
        className="absolute -left-40 -top-80"
        initial={{ scale: 0, opacity: 0.6 }}
        animate={{ scale: 5, opacity: 0 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeOut' }}
      >
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Wave 2 */}
      <motion.div
        className="absolute -left-40 -top-80"
        initial={{ scale: 0, opacity: 0.4 }}
        animate={{ scale: 6, opacity: 0 }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeOut' }}
      >
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="350" cy="350" r="250" stroke="white" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Wave 3 */}
      <motion.div
        className="absolute -left-40 -top-80"
        initial={{ scale: 0, opacity: 0.2 }}
        animate={{ scale: 7, opacity: 0 }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeOut' }}
      >
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="300" stroke="white" strokeWidth="2" />
        </svg>
      </motion.div>
    </div>
  );
};

export default WaveBackground;

