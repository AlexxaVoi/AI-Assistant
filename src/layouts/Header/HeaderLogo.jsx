import "./HeaderLogo.css";
import logo from "../../assets/icons/icon-logo.svg";

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <img src={logo} alt="MegaAI logo" />
      <p className="header-logo-text">MegaAI</p>
    </div>
  );
};

export default HeaderLogo;
