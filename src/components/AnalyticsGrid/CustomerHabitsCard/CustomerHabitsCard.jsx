import iconColumb from "../../../assets/icons/icon-three-columb.svg";

import CustomerHabitsList from "./CustomerHabitsList.jsx";
import CustomerHabitsGraf from "./CustomerHabitsGraf.jsx";

import "./CustomerHabitsCard.css";

import { cssVar } from "../../../utils/cssVar.js";

const HABIT_CONTENT = { title: "Customer Habits" };
const HABIT_GRAF_DATA = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  valueLabels: {
    min: 0,
    max: 50000,
    step: 10000,
  },
  fontsLabels: {
    family: cssVar("--third-brand-text-style", "Inter"),
    size: 12,
    weight: "normal",
  },
  datasets: [
    {
      label: "Seen Products",
      data: [30000, 45000, 45000, 35000, 25000, 42000, 33000, 30000],
      backgroundColor: cssVar("--dark-emerald-color", "red"),
      borderRadius: 30,
      borderSkipped: false,
    },
    {
      label: "Sales",
      data: [50000, 29000, 29000, 27000, 48000, 20000, 18000, 37000],
      backgroundColor: cssVar("--light-emerald-color", "red"),
      borderRadius: 30,
      borderSkipped: false,
    },
  ],
};

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
        <CustomerHabitsGraf data={HABIT_GRAF_DATA} />
      </div>
    </article>
  );
};

export default CustomerHabitsCard;
