import "./ToggleOption.css";

const ToggleOption = ({ period, discount }) => {
  return (
    <label className="toggle-option">
      <input type="radio" name="billing" />
      <span className="custom-radio"></span>
      {period}
      {discount != null ? (
        <span className="toggle__discount">Save {discount}%</span>
      ) : null}
    </label>
  );
};

export default ToggleOption;
