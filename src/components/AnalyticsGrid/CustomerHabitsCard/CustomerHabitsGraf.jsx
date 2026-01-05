import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import "./CustomerHabitsGraf.css";

const CustomerHabitsGraf = ({ data }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: data,
      maxBarThickness: 30,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            min: data.valueLabels.min,
            max: data.valueLabels.max,
            ticks: {
              stepSize: data.valueLabels.step,
              callback: (value) => `${value / 1000}к`,
              color: "#CADFE7",
              font: {
                size: 12,
                weight: "normal",
                family: data.fontFamilyLabels,
              },
            },
          },
          x: {
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

  return <canvas ref={canvasRef} className="habit__graf" />;
};

export default CustomerHabitsGraf;
