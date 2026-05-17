"use client";

import { useEffect, useState } from "react";
import { calculateGravity } from "../utils/gravity";

type Props = {
  onForceChange: (value: number) => void;
};

export default function GravityForm({ onForceChange }: Props) {
  const [m1, setM1] = useState(1000);
  const [m2, setM2] = useState(500);
  const [distance, setDistance] = useState(10);

  const force = calculateGravity(m1, m2, distance);

  useEffect(() => {
    onForceChange(force);
  }, [force, onForceChange]);

  const formatScientific = (value: number) => {
    return value
      .toExponential(3)
      .replace("e-", " × 10⁻")
      .replace("e+", " × 10^");
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl w-full max-w-4xl border border-cyan-500/20">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">
        Gravitációs Erő Számítás
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block mb-2 text-sm text-gray-300">
            Első tömeg (kg)
          </label>

          <input
            type="number"
            min={1}
            value={m1}
            onChange={(e) => setM1(Number(e.target.value))}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-300">
            Második tömeg (kg)
          </label>

          <input
            type="number"
            min={1}
            value={m2}
            onChange={(e) => setM2(Number(e.target.value))}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-300">
            Távolság (m)
          </label>

          <input
            type="number"
            min={1}
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      </div>

      <div className="mt-8 bg-black/40 rounded-xl p-5 text-center border border-cyan-500/20">
        <div className="text-gray-400 mb-2">
          Gravitációs erő
        </div>

        <div className="text-3xl font-bold text-cyan-400 break-all">
          {formatScientific(force)} N
        </div>
      </div>
    </div>
  );
}