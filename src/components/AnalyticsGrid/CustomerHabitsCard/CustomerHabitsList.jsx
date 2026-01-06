import CustomerHabitsItem from "./CustomerHabitsItem";

import "./CustomerHabitsList.css";

const CustomerHabitsList = ({ arrSourceData }) => {
  return (
    <ul className="revenue-source__customer-types">
      {arrSourceData.map((dataset) => (
        <CustomerHabitsItem
          key={dataset.label.toLowerCase().replace(/\s+/g, "")}
          text={dataset.label}
          color={dataset.backgroundColor}
        />
      ))}
    </ul>
  );
};
export default CustomerHabitsList;
