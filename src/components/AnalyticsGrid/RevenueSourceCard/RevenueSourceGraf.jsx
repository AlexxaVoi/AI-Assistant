import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import "./RevenueSourceGraf.css";

const RevenueSourceGraf = ({ data }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: data,

      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            mode: "nearest",
            intersect: true,

            backgroundColor: "#000000",
            displayColors: false,

            position: "average",
            padding: 7,
            callbacks: {
              title: () => null,
              label: (context) => {
                return `${context.parsed.y / 1000}k`;
              },
            },
          },
        },
        interaction: {
          mode: "nearest",
          intersect: false,
        },
        scales: {
          y: {
            min: data.valueLabels.min,
            max: data.valueLabels.max,
            ticks: {
              stepSize: data.valueLabels.step,
              callback: (value) => `${value / 1000}к`,
              color: "#CADFE7",
              font: data.fontsLabels,
            },
          },
          x: {
            grid: {
              display: true,
              color: " #324B55",
            },
            border: {
              display: false,
            },
            ticks: {
              color: "#CADFE7",
              font: data.fontsLabels,
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [data]);

  return <canvas ref={canvasRef} className="revenue-source__graf" />;
};

export default RevenueSourceGraf;
