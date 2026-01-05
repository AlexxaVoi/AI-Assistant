import "./CustomerHabitsItem.css";

const CustomerHabitsItem = ({ text, color }) => {
  return (
    <li className="habit__customer-type">
      <span
        className={`habit__indicator`}
        style={{ backgroundColor: color }}
      ></span>
      {text}
    </li>
  );
};
export default CustomerHabitsItem;
