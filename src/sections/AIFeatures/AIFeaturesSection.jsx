import Container from "../../layouts/Container/Container";
import AIFunctionCard from "../../components/AIFunctionCard/AIFunctionCard.jsx";

import "./AIFeaturesSection.css";

const AIFEATURES__CONTENT = {
  title: "What the AI Assistant Does",
  description:
    "Your intelligent assistant turns data into clear decisions, automates analytics, and helps your business grow faster.",
};

const AIFeaturesSection = () => {
  return (
    <section className="ai-features" id="feature">
      <Container>
        <div className="ai-features__container">
          <div className="ai-features__text">
            <h2 className="ai-features__title">{AIFEATURES__CONTENT.title}</h2>
            <h3 className="ai-features__description">
              {AIFEATURES__CONTENT.description}
            </h3>
          </div>
          <AIFunctionCard />
        </div>
      </Container>
    </section>
  );
};

export default AIFeaturesSection;
