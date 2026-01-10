import "./HeaderLogo.css";
import logo from "../../assets/icons/icon-logo.svg";

const HeaderLogo = () => {
  return (
    <div className="header__logo">
      <img src={logo} alt="MegaAI logo" />
      <p className="header__logo-desc">MegaAI</p>
    </div>
  );
};

export default HeaderLogo;
