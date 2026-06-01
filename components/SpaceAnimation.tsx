"use client";

import { motion } from "framer-motion";

type Props = {
  force: number;
};

export default function SpaceAnimation({ force }: Props) {
 const safeForce =
  Number.isFinite(force) && force > 0
    ? force
    : 1;

const visualForce = safeForce * 1e12;

const logForce = Math.log10(visualForce + 1);

const duration = Math.max(
  2,
  12 - logForce
);

const orbitSize = Math.min(
  320,
  180 + logForce * 20
);

  return (
    <div className="relative w-full max-w-4xl h-[420px] bg-black rounded-2xl overflow-hidden mt-10 border border-cyan-500/20 shadow-2xl transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
      {/* csillag háttér */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" />

      {/* nap */}
      <div className="absolute left-1/2 top-1/2 w-28 h-28 rounded-full bg-yellow-400 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_80px_rgba(250,204,21,0.9)]" />

      {/* orbit kör */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full border border-cyan-500/20 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: orbitSize,
          height: orbitSize,
        }}
      />

      {/* forgó bolygó */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: orbitSize,
          height: orbitSize,
        }}
      >
        <div className="absolute top-0 left-1/2 w-10 h-10 rounded-full bg-cyan-400 -translate-x-1/2 shadow-[0_0_25px_rgba(34,211,238,0.9)]" />
      </motion.div>

      {/* info */}
      <div className="absolute bottom-5 left-5 bg-black/60 border border-cyan-500/20 rounded-xl px-4 py-3">
        <div className="text-sm text-gray-400">
          Orbit sebesség
        </div>

        <div className="text-cyan-400 font-bold">
          {duration.toFixed(2)} s / kör
        </div>
      </div>
    </div>
  );
}