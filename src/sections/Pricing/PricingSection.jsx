import Container from "../../layouts/Container/Container";
import BillingToggle from "../../components/BillingToggle/BillingToggle.jsx";
import PricingCards from "../../components/PricingCards/PricingCards.jsx";

import "./PricingSection.css";

const dataList = [
  {
    name: "Free",
    price: 0,
    period: "Forever",
    description: "Basic tools for small businesses.",
    nameFeature: "Free Plan Includes",
    features: [
      "Basic Analytics Dashboard",
      "Weekly email summaries",
      "Up to 1,000 events tracked per month",
      "1 Data Source Integration",
      "Email Support",
    ],
  },
  {
    name: "Pro",
    price: 19,
    period: "Per Month",
    description: "Advanced tools for growing teems.",
    nameFeature: "All Free Plan Fitures, Plus",
    features: [
      "Up to 10 Users",
      "Advanced Analytics (up to 5 custom boards)",
      "AI Assistant for insight generation",
      "Conversion channel analysis",
      "Up to 50,000 events tracked per month",
    ],
  },
  {
    name: "Team",
    price: 49,
    period: "Per Month",
    description: "Complete collaboration for large teams.",
    nameFeature: "All Pro Plan Fitures, Plus",
    features: [
      "Unlimited Users",
      "Collaborative Workspaces",
      "Unlimited event tracking",
      "Advanced access & security (SSO)",
      "Dedicated Account Manager & 24/7 Support",
    ],
  },
];

const PRICE_CONTENT = {
  title: "Choose the Perfect Plan for Needs of Your Bussines",
  description:
    "Flexible, transparent pricing built to support your team, no matter the size. Get started with our free plan and easily add more power as your company expands.",
};

const PricingSection = () => {
  return (
    <section className="pricing" id="price">
      <Container>
        <div className="pricing__content">
          <div className="pricing__text">
            <h2>{PRICE_CONTENT.title}</h2>
            <h3 className="">{PRICE_CONTENT.description}</h3>
          </div>
          <BillingToggle />
          <PricingCards dataList={dataList} />
        </div>
      </Container>
    </section>
  );
};
export default PricingSection;
