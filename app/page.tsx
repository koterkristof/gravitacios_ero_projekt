"use client";

import { useState } from "react";

import GravityForm from "../components/GravityForm";
import GravityChart from "../components/GravityChart";
import SpaceAnimation from "../components/SpaceAnimation";

export default function Page() {
  const [force, setForce] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-white p-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
          Gravitációs Erő Projekt
        </h1>

        <p className="text-gray-300 mb-10 text-center max-w-2xl">
          Interaktív fizikai projekt TypeScript, Chart.js és Motion.dev
          használatával.
        </p>

        <div className="mb-8">
          <GravityForm onForceChange={setForce} />
        </div>

        <GravityChart force={force} />

        <SpaceAnimation />

        <div className="mt-12 bg-gray-900 p-6 rounded-2xl max-w-3xl">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Newton gravitációs törvénye
          </h2>

          <div className="text-lg mb-4">
            F = G * (m1 * m2) / r^2
          </div>

          <p className="text-gray-300 leading-8">
            A gravitációs erő két test között egyenesen arányos a
            tömegeikkel és fordítottan arányos a köztük lévő távolság
            négyzetével.
          </p>
        </div>
      </div>
    </main>
  );
}