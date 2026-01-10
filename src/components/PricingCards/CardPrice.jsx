import CardPriceContent from "./CardPriceContent";
import "./CardPrice.css";

const CardPrice = ({ cardData }) => {
  return (
    <article className="pricing-card">
      <CardPriceContent
        name={cardData.name}
        price={cardData.price}
        period={cardData.period}
        description={cardData.description}
        nameFeature={cardData.nameFeature}
        features={cardData.features}
      />
    </article>
  );
};

export default CardPrice;
