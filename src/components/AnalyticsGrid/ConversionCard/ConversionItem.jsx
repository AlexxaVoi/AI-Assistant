import "./ConversionItem.css";

const ConversionItem = ({ plaform }) => {
  return (
    <li className="conversion__platform">
      {plaform}
      <span
        className={`conversion__indicator conversion__indicator--${plaform.toLowerCase()}`}
      ></span>
    </li>
  );
};

export default ConversionItem;
