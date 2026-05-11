"use client";

import { useState } from "react";
import { calculateGravity } from "../utils/gravity";

type Props = {
  onForceChange: (value: number) => void;
};

export default function GravityForm({ onForceChange }: Props) {
  const [m1, setM1] = useState(1000);
  const [m2, setM2] = useState(500);
  const [distance, setDistance] = useState(10);

  const force = calculateGravity(m1, m2, distance);

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-xl">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">
        Gravitációs Erő Számítás
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          value={m1}
          onChange={(e) => setM1(Number(e.target.value))}
          placeholder="Első tömeg"
          className="w-full p-3 rounded bg-gray-800"
        />

        <input
          type="number"
          value={m2}
          onChange={(e) => setM2(Number(e.target.value))}
          placeholder="Második tömeg"
          className="w-full p-3 rounded bg-gray-800"
        />

        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          placeholder="Távolság"
          className="w-full p-3 rounded bg-gray-800"
        />
      </div>

      <button
        onClick={() => onForceChange(force)}
        className="mt-6 bg-cyan-500 px-6 py-3 rounded-xl"
      >
        Számítás
      </button>

      <div className="mt-6 text-xl">
  Erő:{" "}
  {force
    .toExponential(3)
    .replace("e-", " × 10⁻")
    .replace("e+", " × 10")}
  {" "}N
</div>
    </div>
  );
}