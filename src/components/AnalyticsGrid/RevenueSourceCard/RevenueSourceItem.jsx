import "./RevenueSourceItem.css";

const RevenueSourceItem = ({ text, color }) => {
  return (
    <li className="revenue-source__customer-type">
      <span
        className={`revenue-source__indicator`}
        style={{ backgroundColor: color }}
      ></span>
      {text}
    </li>
  );
};

export default RevenueSourceItem;
