import "./BillingToggle.css";
import ToggleOption from "./ToggleOption.jsx";

const BILLING_OPTIONS = [
  { id: "monthly", label: "Monthly", discount: null },
  { id: "annually", label: "Annually", discount: 15 },
];

const BillingToggle = ({ check, setCheck }) => {
  return (
    <div className="billing-toggle">
      <div className="billing-toggle__container">
        <div className="toggle">
          {BILLING_OPTIONS.map((option) => (
            <ToggleOption
              key={option.id}
              period={option.label}
              discount={option.discount}
              checked={option.id === "monthly" ? check : !check}
              onChange={() => setCheck(option.id === "monthly")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillingToggle;
