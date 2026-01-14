import "./ToggleOption.css";

const ToggleOption = ({ period, discount, checked, onChange }) => {
  return (
    <label className="toggle-option" onChange={onChange}>
      <input type="radio" name="billing" checked={checked} />

      <span className="custom-radio" />

      <span className="toggle-option__label">{period}</span>

      {discount != null && (
        <span className="toggle__discount">Save {discount}%</span>
      )}
    </label>
  );
};

export default ToggleOption;
