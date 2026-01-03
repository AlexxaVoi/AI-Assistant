import "./Button.css";

const Button = ({ text, variant, handelClick }) => {
  return (
    <button className={`button button--${variant}`} onClick={handelClick}>
      {text}
    </button>
  );
};
export default Button;
