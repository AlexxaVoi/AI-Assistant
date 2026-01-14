import CardPrice from "./CardPrice";

import "./PricingCards.css";

const PricingCardsList = ({ dataList, multiplier }) => {
  return (
    <div className="pricing">
      {dataList.map((item, index) => (
        <CardPrice cardData={item} key={index} multiplier={multiplier} />
      ))}
    </div>
  );
};

export default PricingCardsList;
