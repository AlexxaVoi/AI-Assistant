import RevenueSourceItem from "./RevenueSourceItem";

import "./RevenueSourceList.css";

const RevenueSourceList = ({ arrSourceData }) => {
  return (
    <ul className="revenue-source__customer-types">
      {arrSourceData.map((dataset) => (
        <RevenueSourceItem
          key={dataset.label.toLowerCase().replace(/\s+/g, "")}
          text={dataset.label}
          color={dataset.borderColor}
        />
      ))}
    </ul>
  );
};

export default RevenueSourceList;
