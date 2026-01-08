import Container from "../../layouts/Container/Container";
import AIFunctionCardList from "../../components/AIFunctionCardList/AIFunctionCardList";

import "./AIFeaturesSection.css";

const AIFEATURES__CONTENT = {
  title: "What the AI Assistant Does",
  description:
    "Your intelligent assistant turns data into clear decisions, automates analytics, and helps your business grow faster.",
};

const AIFeaturesSection = () => {
  return (
    <section className="ai-feature-section" id="feature">
      <Container>
        <div className="ai-feature__container">
          <div className="ai-feature__text">
            <h2 className="ai-feature__title">{AIFEATURES__CONTENT.title}</h2>
            <h3 className="ai-feature__description">
              {AIFEATURES__CONTENT.description}
            </h3>
          </div>
          <AIFunctionCardList />
        </div>
      </Container>
    </section>
  );
};

export default AIFeaturesSection;
