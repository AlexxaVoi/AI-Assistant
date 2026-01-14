import "./BrandLogo.css";
import logo from "../../assets/icons/icon-logo.svg";

const BrandLogo = () => {
  return (
    <div className="brand-logo">
      <img src={logo} alt="MegaAI logo" />
      <p className="brand-logo__desc">MegaAI</p>
    </div>
  );
};

export default BrandLogo;
