import ConversionList from "./ConversionList";

import roundDiagram from "../../../assets/icons/chart-diagram.svg";

import "./ConversionCard.css";

const CONVERSION_CONTENT = {
  title: "Conversion Channels",
  description:
    "Analysis of the contribution of main marketing and sales channels to total revenue for the current period.",
};

const ConversionCard = () => {
  return (
    <article className="conversion">
      <div className="conversion__data">
        <p className="conversion__title">{CONVERSION_CONTENT.title}</p>
        <p className="conversion__description">
          {CONVERSION_CONTENT.description}
        </p>
      </div>

      <div className="conversion__metric">
        <ConversionList />
        <img
          className="conversion__metric-diagram"
          src={roundDiagram}
          alt="round diagram"
        />
      </div>
    </article>
  );
};
export default ConversionCard;
