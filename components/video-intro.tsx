"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoIntro() {
  const [isComplete, setIsComplete] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Preload video
    if (videoRef.current) {
      videoRef.current.load();
    }

    // Auto-complete after 3 seconds
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setIsComplete(true);
  };

  const handleSkip = () => {
    setIsComplete(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#e7e7e1] flex items-center justify-center"
          onClick={handleSkip}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-contain"
          >
            <source src="/DEV-JOE-MOTIONGRAPHIC.mp4" type="video/mp4" />
          </video>

          {/* Skip hint */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 right-8 text-white text-sm px-4 py-2 border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
            onClick={handleSkip}
          >
            Skip intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
