import CustomerHabitsItem from "./CustomerHabitsItem";

import "./CustomerHabitsList.css";

const CustomerHabitsList = ({ arrSourceData }) => {
  return (
    <ul className="revenue-source__customer-types">
      {arrSourceData.map((item) => (
        <CustomerHabitsItem
          key={item.name.toLowerCase().replace(/\s+/g, "")}
          text={item.name}
        />
      ))}
    </ul>
  );
};
export default CustomerHabitsList;
