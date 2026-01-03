import "./CustomerHabitsItem.css";

const CustomerHabitsItem = ({ text }) => {
  return (
    <li className="habit__customer-type">
      <span
        className={`habit__indicator habit__indicator--${text
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      ></span>
      {text}
    </li>
  );
};
export default CustomerHabitsItem;
