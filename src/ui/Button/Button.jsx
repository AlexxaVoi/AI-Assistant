import "./Button.css";

const Button = ({ type = "button", text, variant, handelClick }) => {
  return (
    <button
      className={`button button--${variant}`}
      type={type}
      onClick={handelClick}
    >
      {text}
    </button>
  );
};
export default Button;
