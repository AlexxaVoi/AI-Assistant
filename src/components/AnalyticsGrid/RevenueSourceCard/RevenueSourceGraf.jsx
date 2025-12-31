import { useEffect, useRef } from "react";
import "./RevenueSourceGraf.css";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const SVG_NS = "http://www.w3.org/2000/svg";

const CHART_HEIGHT = 275;
const STEP_X = 50;
const MAX_VALUE = 50000;
const Y_STEPS = 5;

const RevenueSourceGraf = ({ arrayGridData }) => {
  const gridRef = useRef(null);
  const chartRef = useRef(null);

  // vertical lines + months
  useEffect(() => {
    const elements = [];

    for (let i = 0; i < MONTHS.length; i++) {
      const x = i * STEP_X + STEP_X / 2;

      const line = document.createElementNS(SVG_NS, "line");
      line.setAttribute("x1", x);
      line.setAttribute("y1", 0);
      line.setAttribute("x2", x);
      line.setAttribute("y2", CHART_HEIGHT);

      const month = document.createElementNS(SVG_NS, "text");
      month.textContent = MONTHS[i];
      month.classList.add("grid__month");
      month.setAttribute("x", x);
      month.setAttribute("y", CHART_HEIGHT + 18);
      month.setAttribute("text-anchor", "middle");

      elements.push(line, month);
    }

    gridRef.current.append(...elements);
  }, []);

  // values
  useEffect(() => {
    const elements = [];
    const stepHeight = CHART_HEIGHT / Y_STEPS;
    const valueStep = MAX_VALUE / Y_STEPS;

    for (let i = 0; i <= Y_STEPS; i++) {
      const y = i * stepHeight + 10;
      const value = MAX_VALUE - i * valueStep;

      const label = document.createElementNS(SVG_NS, "text");
      label.textContent = `${value / 1000}k`;
      label.classList.add("grid__value");
      label.setAttribute("x", -20);
      label.setAttribute("y", y);
      label.setAttribute("text-anchor", "end");
      label.setAttribute("dominant-baseline", "middle");

      elements.push(label);
    }

    gridRef.current.append(...elements);
  }, []);

  // Line chart
  useEffect(() => {
    const chartGroup = chartRef.current;
    chartGroup.innerHTML = "";

    arrayGridData.forEach((series, seriesIndex) => {
      const points = series.monthlyMaxProfit.map((value, i) => ({
        x: i * STEP_X + STEP_X / 2,
        y: CHART_HEIGHT - (value / MAX_VALUE) * CHART_HEIGHT,
      }));

      let d = `M ${points[0].x} ${points[0].y}`;

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];

        const cx = (prev.x + curr.x) / 2;

        d += ` C ${cx} ${prev.y}, ${cx} ${curr.y}, ${curr.x} ${curr.y}`;
      }

      const path = document.createElementNS(SVG_NS, "path");
      path.setAttribute("d", d);
      path.classList.add("chart__line", `chart__line--${seriesIndex}`);

      chartGroup.append(path);
    });
  }, [arrayGridData]);

  return (
    <div className="revenue-source__chart">
      <svg viewBox="-50 0 650 300">
        <g ref={gridRef} className="grid" strokeWidth="1" />
        <g ref={chartRef} className="chart" />
      </svg>
    </div>
  );
};

export default RevenueSourceGraf;
