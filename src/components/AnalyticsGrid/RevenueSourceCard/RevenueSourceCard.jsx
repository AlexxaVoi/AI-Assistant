import iconColumb from "../../../assets/icons/icon-three-columb.svg";

import RevenueSourceList from "./RevenueSourceList.jsx";
import RevenueSourceGraf from "./RevenueSourceGraf.jsx";

import "./RevenueSourceCard.css";

import { cssVar } from "../../../utils/cssVar.js";

const REVENUE_CONTENT = {
  title: "Revenue Source",
};
const REVENUE_GRAF_DATA = {
  labels: [
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
  ],
  valueLabels: {
    min: 0,
    max: 50000,
    step: 10000,
  },
  fontsLabels: {
    family: cssVar("--third-brand-text-style", "Inter"),
    size: 12,
    weight: "normal",
  },
  datasets: [
    {
      label: "New Customers",
      data: [
        10000, 29000, 25000, 26000, 18000, 14000, 11000, 20000, 17000, 30000,
        26000, 24000,
      ],
      borderColor: cssVar("--yellow-color", "red"),
      borderWidth: 6,
      pointRadius: 0,
      tension: 0.4,
      borderCapStyle: "round",

      pointHoverRadius: 7,
      pointHoverBackgroundColor: cssVar("--yellow-color", "red"),
      pointHoverBorderColor: "#0b1f26",
      pointHoverBorderWidth: 2,
    },
    {
      label: "Repeat Purchases",
      data: [
        18000, 29000, 30000, 39000, 40000, 28000, 21000, 27000, 25000, 38000,
        28000, 35000,
      ],
      borderColor: cssVar("--light-blue-color", "red"),
      borderWidth: 6,
      pointRadius: 0,
      tension: 0.4,
      borderCapStyle: "round",

      pointHoverRadius: 7,
      pointHoverBackgroundColor: cssVar("--light-blue-color", "red"),
      pointHoverBorderColor: "#0b1f26",
      pointHoverBorderWidth: 2,
    },
  ],
};

const RevenueSourceCard = () => {
  return (
    <article className="revenue-source card-5">
      <div className="revenue-source__header">
        <div className="revenue-source__info">
          <p className="revenue-source__title">{REVENUE_CONTENT.title}</p>
          <RevenueSourceList arrSourceData={REVENUE_GRAF_DATA.datasets} />
        </div>
        <img className="revenue-source__icon" src={iconColumb} alt="columb" />
      </div>

      <div className="revenue-source__metric">
        <RevenueSourceGraf data={REVENUE_GRAF_DATA} />
      </div>
    </article>
  );
};
export default RevenueSourceCard;
