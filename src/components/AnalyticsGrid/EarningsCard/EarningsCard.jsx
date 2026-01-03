import iconColumb from "../../../assets/icons/icon-yellow-three-columb.svg";
import decorateGraf from "../../../assets/icons/chart-graphic.svg";

import "./EarningsCard.css";

const EARNING_CONTENT = {
  title: "Expected earnings",
  profit: "$20000k",
  income: "+2.45%",
};

const EarningsCard = () => {
  return (
    <article className="earning">
      <div className="earning__data">
        <img className="earning__icon" alt="icon column" src={iconColumb} />

        <div className="earning__text">
          <p className="earning__title">{EARNING_CONTENT.title}</p>
          <p className="earning__profit">{EARNING_CONTENT.profit}</p>
          <p className="earning__income">{EARNING_CONTENT.income}</p>
        </div>
      </div>

      <img className="earning__graph" alt="graph" src={decorateGraf} />
    </article>
  );
};
export default EarningsCard;
