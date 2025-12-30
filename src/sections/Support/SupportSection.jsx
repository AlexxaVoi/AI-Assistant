import Container from "../../layouts/Container/Container";

import "./SupportSection.css";

const SUPPORT_CONTENT = {
  title: "We’re here to help with your questions",
};

const SupportSection = () => {
  return (
    <section className="support-section">
      <Container>
        <div className="support__container">
          <h2 className="support__title">{SUPPORT_CONTENT.title}</h2>
          <div className="support__contact-form"></div>
        </div>
      </Container>
    </section>
  );
};
export default SupportSection;
