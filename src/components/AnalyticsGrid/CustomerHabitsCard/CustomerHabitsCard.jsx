import iconColumb from "../../../assets/icons/icon-three-columb.svg";

import CustomerHabitsList from "./CustomerHabitsList.jsx";
import CustomerHabitsGraf from "./CustomerHabitsGraf.jsx";

import "./CustomerHabitsCard.css";

const HABIT_CONTENT = { title: "Customer Habits" };
const HABIT_GRAF_DATA = [{ name: "Seen Products" }, { name: "Sales" }];

const CustomerHabitsCard = () => {
  return (
    <article className="habit">
      <div className="habit__head">
        <div className="habit__head-data">
          <p className="habit__head-title">{HABIT_CONTENT.title}</p>
          <CustomerHabitsList arrSourceData={HABIT_GRAF_DATA} />
        </div>
        <img className="habit__icon" src={iconColumb} alt="columb" />
      </div>

      <div className="habit__metric">
        <CustomerHabitsGraf />
      </div>
    </article>
  );
};

export default CustomerHabitsCard;
