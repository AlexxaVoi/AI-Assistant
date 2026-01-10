import Container from "../../layouts/Container/Container";

import "./SupportSection.css";

const SUPPORT_CONTENT = {
  title: "We’re here to help with your questions",
};

const SupportSection = () => {
  return (
    <section className="support-section" id="support">
      <Container>
        <div className="support__container">
          <h2 className="support__title">{SUPPORT_CONTENT.title}</h2>
          <div className="support__contact-form">
            <form action="#" method="POST" title="Форма для додадкових питань">
              <label htmlFor="username">Forever</label>
              <input id="username" type="text" name="username" />

              <label htmlFor="address">Email address</label>
              <input id="address" type="email" name="address" />

              <label htmlFor="question">Question</label>
              <textarea id="question" name="question" />

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default SupportSection;
