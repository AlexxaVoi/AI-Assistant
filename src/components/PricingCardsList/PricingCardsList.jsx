import CardPrice from "./CardPrice";

import "./PricingCardsList.css";

const PricingCardsList = ({ dataList }) => {
  return (
    <div className="pricing">
      {dataList.map((item, index) => (
        <CardPrice cardData={item} key={index} />
      ))}
    </div>
  );
};

export default PricingCardsList;
