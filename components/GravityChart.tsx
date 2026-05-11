"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

type Props = {
  force: number;
};

export default function GravityChart({ force }: Props) {
  const data = {
    labels: ["1m", "2m", "3m", "4m", "5m"],
    datasets: [
      {
        label: "Gravitációs erő",
        data: [
          force,
          force / 4,
          force / 9,
          force / 16,
          force / 25,
        ],
        borderColor: "#22d3ee",
      },
    ],
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl w-full max-w-2xl mt-8">
      <Line data={data} />
    </div>
  );
}