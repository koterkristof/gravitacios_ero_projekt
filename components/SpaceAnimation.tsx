"use client";

import { motion } from "motion/react";

export default function SpaceAnimation() {
  return (
    <div className="relative w-full max-w-3xl h-[250px] bg-black rounded-2xl overflow-hidden mt-8">
      <div className="absolute w-24 h-24 rounded-full bg-yellow-400 left-10 top-[80px]" />

      <motion.div
        animate={{
          x: [0, 500, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-14 h-14 rounded-full bg-cyan-400 top-[95px] left-[140px]"
      />
    </div>
  );
}