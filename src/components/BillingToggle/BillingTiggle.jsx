import "./BillingToggle.css";
import ToggleOption from "./ToggleOption";
const billingPeriod = [
  { periodName: "Monthly", discounts: null },
  {
    periodName: "Annually",
    discount: 15,
  },
];

const BillingToggle = () => {
  return (
    <div className="billing-toggle">
      <div className="billing-toggle__container">
        <div className="toggle">
          {billingPeriod.map((element, index) => (
            <ToggleOption
              period={element.periodName}
              discount={element.discount}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BillingToggle;
