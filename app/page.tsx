"use client";

import { useState } from "react";

import GravityForm from "../components/GravityForm";
import GravityChart from "../components/GravityChart";
import SpaceAnimation from "../components/SpaceAnimation";
import SpaceBackground from "../components/SpaceBackground";
import ProfileCard from "../components/ProfileCard";

export default function Page() {
  const [force, setForce] = useState(0);

  return (
    <main className="min-h-screen text-white p-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold text-cyan-400 mb-4 drop-shadow-[0_0_20px_cyan] cursor-default">
          Gravitációs Erő Szimulátor
        </h1>
        <SpaceBackground />

        <div className="mb-8">
          <GravityForm onForceChange={setForce} />
        </div>

        <GravityChart force={force} />

        <SpaceAnimation force={force} />

        <div className="mt-12 bg-gray-900 p-6 rounded-2xl max-w-3xl transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] border border-cyan-500/20 cursor-default">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 cursor-default">
            Newton gravitációs törvénye
          </h2>

          <div className="text-3xl mb-6 font-mono text-cyan-300 text-center cursor-default">
  F = G × <span className="inline-block align-middle cursor-default">
    <span className="block border-b border-cyan-300 px-2 drop-shadow-[0_0_20px_cyan] cursor-default">
      m₁ × m₂
    </span>
    <span className="block text-center cursor-default">
      r²
    </span>
  </span>
</div>

          <p className="text-gray-300 leading-8 drop-shadow-[0_0_20px_cyan] cursor-default">
            A gravitációs erő két test között egyenesen arányos a
            tömegeikkel és fordítottan arányos a köztük lévő távolság
            négyzetével.
          </p>

        </div>

         <div>
            <ProfileCard />
        </div>  
      </div>
    </main>
  );
}