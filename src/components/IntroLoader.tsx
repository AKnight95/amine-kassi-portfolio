"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setVisible(false);
    }, 850);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020506]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.45,
            },
          }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="font-display text-4xl font-bold tracking-[0.22em] text-white"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              AK
            </motion.div>

            <div className="mt-6 flex items-center gap-3">
              <motion.span
                className="h-px bg-gradient-to-r from-transparent to-[#00e6e6]"
                initial={{ width: 0 }}
                animate={{ width: 70 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
              />

              <motion.span
                className="h-2 w-2 rotate-45 border border-[#00e6e6] shadow-[0_0_15px_rgba(0,230,230,0.9)]"
                initial={{
                  opacity: 0,
                  rotate: 0,
                }}
                animate={{
                  opacity: 1,
                  rotate: 45,
                }}
                transition={{
                  delay: 0.25,
                }}
              />

              <motion.span
                className="h-px bg-gradient-to-l from-transparent to-[#00e6e6]"
                initial={{ width: 0 }}
                animate={{ width: 70 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
              />
            </div>

            <motion.p
              className="mt-5 text-xs uppercase tracking-[0.28em] text-white/35"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.35,
              }}
            >
              Full-Stack Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}