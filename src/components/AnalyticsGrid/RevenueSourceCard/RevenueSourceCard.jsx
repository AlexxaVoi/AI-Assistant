import iconColumb from "../../../assets/icons/icon-three-columb.svg";

import RevenueSourceList from "./RevenueSourceList.jsx";
import RevenueSourceGraf from "./RevenueSourceGraf.jsx";

import "./RevenueSourceCard.css";

const REVENUE_CONTENT = {
  title: "Revenue Source",
};

const REVENUE_GRAF_DATA = [
  {
    name: "New Customers",
    monthlyMaxProfit: [
      10000, 29000, 25000, 26000, 18000, 14000, 11000, 20000, 17000, 30000,
      26000, 24000,
    ],
  },
  {
    name: "Repeat Purchases",
    monthlyMaxProfit: [
      18000, 29000, 30000, 39000, 40000, 28000, 21000, 27000, 25000, 38000,
      28000, 35000,
    ],
  },
];

const RevenueSourceCard = () => {
  return (
    <article className="revenue-source">
      <div className="revenue-source__head">
        <div className="revenue-source__head-data">
          <p className="revenue-source__head-title">{REVENUE_CONTENT.title}</p>
          <RevenueSourceList arrSourceData={REVENUE_GRAF_DATA} />
        </div>
        <img className="revenue-source__icon" src={iconColumb} alt="columb" />
      </div>

      <div className="revenue-source__metric">
        <RevenueSourceGraf arrayGridData={REVENUE_GRAF_DATA} />
      </div>
    </article>
  );
};
export default RevenueSourceCard;
