import Container from "../../layouts/Container/Container";
import AnalyticsGridSection from "../../components/AnalyticsGrid/AnalyticsGridSection";
import "./AnalyticsSection.css";

const ANALYTIC_CONTENT = {
  title: "Sales and Performance Analytics",
  description:
    "All key metrics—from expected earnings and total sales to revenue sources and conversion channels—are gathered on a single screen.",
};

const AnalyticsSection = () => {
  return (
    <section className="analytic-section">
      <Container>
        <div className="analytic__container">
          <div className="analytic__text">
            <h2>{ANALYTIC_CONTENT.title}</h2>
            <h3>{ANALYTIC_CONTENT.description}</h3>
          </div>

          <AnalyticsGridSection />
        </div>
      </Container>
    </section>
  );
};
export default AnalyticsSection;
