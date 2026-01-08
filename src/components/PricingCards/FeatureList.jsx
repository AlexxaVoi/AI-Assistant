import FeatureItem from "./FeatureItem";

import "./FeatureList.css";

const FeatureList = ({ items }) => {
  return (
    <ul className="feature__list">
      {items.map((item, index) => (
        <FeatureItem text={item} key={index} />
      ))}
    </ul>
  );
};
export default FeatureList;
