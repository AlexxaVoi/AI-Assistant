import iconPaperScroll from "../../../assets/icons/icon-paper-scroll.svg";

import "./SalesCard.css";

const SALES_CONTENT = {
  title: "Total sales",
  sale: "$245,546",
  incom: "+2.08%",
  description: "Products  vs last month",
};

const SalesCard = () => {
  return (
    <article className="sale card-2">
      <div className="sale__metric">
        <img
          className="sale__metric-icon"
          src={iconPaperScroll}
          alt="paper scroll"
        />
        <p className="sale__metric-income">{SALES_CONTENT.incom}</p>
      </div>

      <div className="sale__data">
        <p className="sale__title">{SALES_CONTENT.title}</p>

        <div className="sale__values">
          <p className="sale__amount">{SALES_CONTENT.sale}</p>
          <p className="sale__description">{SALES_CONTENT.description}</p>
        </div>
      </div>
    </article>
  );
};
export default SalesCard;
