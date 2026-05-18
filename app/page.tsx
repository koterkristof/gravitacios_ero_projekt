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
          Gravitációs Erő Szimulátor
        </h1>


        <div className="mb-8">
          <GravityForm onForceChange={setForce} />
        </div>

        <GravityChart force={force} />

        <SpaceAnimation force={force} />

        <div className="mt-12 bg-gray-900 p-6 rounded-2xl max-w-3xl">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Newton gravitációs törvénye
          </h2>

          <div className="text-3xl mb-6 font-mono text-cyan-300 text-center">
  F = G × <span className="inline-block align-middle">
    <span className="block border-b border-cyan-300 px-2">
      m₁ × m₂
    </span>
    <span className="block text-center">
      r²
    </span>
  </span>
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