import check from "../../assets/icons/icon-check.svg";

import "./FeatureItem.css";

const FeatureItem = ({ text }) => {
  return (
    <li className="feature_item">
      <img src={check} alt="check mark" />
      {text}
    </li>
  );
};

export default FeatureItem;
