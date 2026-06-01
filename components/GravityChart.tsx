"use client";

import { useMemo } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

type Props = {
  force: number;
};

export default function GravityChart({ force }: Props) {
  const distances = [1, 2, 3, 4, 5];

  const formatScientific = (value: number) => {
    const superscriptMap: Record<string, string> = {
      "0": "⁰",
      "1": "¹",
      "2": "²",
      "3": "³",
      "4": "⁴",
      "5": "⁵",
      "6": "⁶",
      "7": "⁷",
      "8": "⁸",
      "9": "⁹",
      "-": "⁻",
    };

    const [base, exponent] = value
      .toExponential(2)
      .split("e");

    const superscriptExponent = exponent
      .split("")
      .map((char) => superscriptMap[char] || char)
      .join("");

    return `${base} × 10${superscriptExponent}`;
  };

  const data = useMemo(() => {
    return {
      labels: distances.map((d) => `${d}m`),
      datasets: [
        {
          label: "Gravitációs erő",
          data: distances.map((d) => force / (d * d)),
          borderColor: "#22d3ee",
          backgroundColor: "#22d3ee",
          tension: 0.4,
        },
      ],
    };
  }, [force]);

 const options = {
  responsive: true,
  maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) =>
            `${formatScientific(ctx.raw)} N`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      y: {
        ticks: {
          callback: (value: any) =>
            formatScientific(Number(value)),
          color: "white",
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
    },
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl w-full max-w-4xl h-[420px] mt-8 border border-cyan-500/20 shadow-2xl transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
      <Line data={data} options={options} />
    </div>
  );
}