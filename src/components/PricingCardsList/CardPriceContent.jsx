import FeatureList from "./FeatureList";
import Button from "../../ui/Button/Button";
import "./CardPriceContent.css";

const CardPriceContent = ({
  name,
  price,
  period,
  description,
  nameFeature,
  features,
}) => {
  return (
    <div className="pricing-card__content">
      <div className="price">
        <p className="price__name">{name}</p>
        <div className="price__row">
          <h3 className="price__value">${price}</h3>
          <p className="price__period">{period}</p>
        </div>
        <p className="price__description">{description}</p>
      </div>
      <div className="feature">
        <p className="feature__name">{nameFeature}</p>
        <FeatureList items={features} />
      </div>
      <div className="subscription">
        <Button text={"Sign Up Now"} variant={"register"} />
        <p className="subscription__bill">Billed monthly.</p>
      </div>
    </div>
  );
};

export default CardPriceContent;
