import CardPriceContent from "./CardPriceContent";
import "./CardPrice.css";

const CardPrice = ({ cardData, multiplier }) => {
  let pricePeriod = 1;
  if (!multiplier) {
    pricePeriod = 12;
  }
  return (
    <article className="pricing-card">
      <CardPriceContent
        name={cardData.name}
        price={cardData.price * pricePeriod}
        period={cardData.period}
        description={cardData.description}
        nameFeature={cardData.nameFeature}
        features={cardData.features}
      />
    </article>
  );
};

export default CardPrice;
