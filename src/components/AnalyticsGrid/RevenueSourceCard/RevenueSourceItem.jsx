import "./RevenueSourceItem.css";

const RevenueSourceItem = ({ text }) => {
  return (
    <li className="revenue-source__customer-type">
      <span
        className={`revenue-source__indicator revenue-source__indicator--${text
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      ></span>
      {text}
    </li>
  );
};

export default RevenueSourceItem;
