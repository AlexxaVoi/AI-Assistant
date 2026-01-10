import "./Header.css";
import Button from "../../ui/Button/Button";
import Navigation from "../../components/Navigation/Navigation";
import HeaderLogo from "./HeaderLogo";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <HeaderLogo />
          <Navigation />
          <Button text={"Start Free Trial"} variant={"header"} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
