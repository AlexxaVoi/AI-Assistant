import RevenueSourceItem from "./RevenueSourceItem";

import "./RevenueSourceList.css";

const RevenueSourceList = ({ arrSourceData }) => {
  return (
    <ul className="revenue-source__customer-types">
      {arrSourceData.map((item) => (
        <RevenueSourceItem
          key={item.name.toLowerCase().replace(/\s+/g, "")}
          text={item.name}
        />
      ))}
    </ul>
  );
};

export default RevenueSourceList;
