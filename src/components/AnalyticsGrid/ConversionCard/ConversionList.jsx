import ConversionItem from "./ConversionItem";

import "./ConversionList.css";

const platformList = ["Instagram", "TikTok", "YouTube"];

const ConversionList = () => {
  return (
    <ul className="conversion__platforms">
      {platformList.map((item) => (
        <ConversionItem key={item} plaform={item} />
      ))}
    </ul>
  );
};

export default ConversionList;
