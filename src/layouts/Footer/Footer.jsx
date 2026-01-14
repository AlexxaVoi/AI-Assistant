import BrandLogo from "../BrandLogo/BrandLogo.jsx";
import Container from "../Container/Container.jsx";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer__inner">
          <BrandLogo />
          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__column">
              <p className="footer__title">Company</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#">Blog</a>
                </li>
                <li className="footer__item">
                  <a href="#">About Us</a>
                </li>
                <li className="footer__item">
                  <a href="#">Contacts Us</a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <p className="footer__title">Product</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#">Features</a>
                </li>
                <li className="footer__item">
                  <a href="#">Integrations</a>
                </li>
                <li className="footer__item">
                  <a href="#">Pricing Plans</a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <p className="footer__title">Resources</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#">Help center</a>
                </li>
                <li className="footer__item">
                  <a href="#">FAQ’s</a>
                </li>
                <li className="footer__item">
                  <a href="#">User guides</a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <p className="footer__title">Platform</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#">Sync datastore</a>
                </li>
                <li className="footer__item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="footer__item">
                  <a href="#">Infrastructure</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
