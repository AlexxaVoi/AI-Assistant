import "./ToggleOption.css";

const ToggleOption = ({ period, discount, action }) => {
  return (
    <label className="toggle-option">
      <input type="radio" name="billing" checked={action} readOnly />
      <span className="custom-radio"></span>
      {period}
      {discount != null && (
        <span className="toggle__discount">Save {discount}%</span>
      )}
    </label>
  );
};

export default ToggleOption;
