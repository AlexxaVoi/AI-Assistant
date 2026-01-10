import iconLorry from "../../../assets/icons/icon-lorry.svg";

import "./OrdersCard.css";

const ORDER_CONTENT = {
  title: "Total orders",
  order: "3,570",
  incom: "+3.15%",
  description: "Products  vs last month",
};

const OrdersCard = () => {
  return (
    <article className="order card-3">
      <div className="order__metric">
        <img className="order__metric-icon" src={iconLorry} alt="lorry" />
        <p className="order__metric-income">{ORDER_CONTENT.incom}</p>
      </div>

      <div className="order__data">
        <p className="order__title">{ORDER_CONTENT.title}</p>

        <div className="order__stats">
          <p className="order__amount">{ORDER_CONTENT.order}</p>
          <p className="order__description">{ORDER_CONTENT.description}</p>
        </div>
      </div>
    </article>
  );
};
export default OrdersCard;
