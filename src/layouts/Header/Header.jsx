import "./Header.css";
import Button from "../../ui/Button/Button";
import Navigation from "../../components/Navigation/Navigation";
import BrandLogo from "../BrandLogo/BrandLogo.jsx";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <BrandLogo />
          <Navigation />
          <Button text={"Start Free Trial"} variant={"header"} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
