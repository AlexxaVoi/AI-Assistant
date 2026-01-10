import "./BillingToggle.css";
import ToggleOption from "./ToggleOption.jsx";
import { useState } from "react";

const BILLING_OPTIONS = [
  { id: "monthly", label: "Monthly", discount: null, active: true },
  { id: "annually", label: "Annually", discount: 15, active: false },
];

const BillingToggle = () => {
  const [activeBilling, setActiveBilling] = useState("monthly");

  return (
    <div className="billing-toggle">
      <div className="billing-toggle__container">
        <div className="toggle">
          {BILLING_OPTIONS.map((element, index) => (
            <ToggleOption
              period={element.label}
              discount={element.discount}
              action={element.active}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BillingToggle;
