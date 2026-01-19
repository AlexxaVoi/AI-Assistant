import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="header-nav">
      <ul className="header-list">
        <li className="header-item">
          <a href="#feature" className="header-item-link">
            Fitures
          </a>
        </li>
        <li className="header-item">
          <a href="#analytics" className="header-item-link">
            Benefits
          </a>
        </li>
        <li className="header-item">
          <a href="#price" className="header-item-link">
            Pricing
          </a>
        </li>
        <li className="header-item">
          <a href="#support" className="header-item-link">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
