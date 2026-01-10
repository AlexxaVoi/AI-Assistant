import InsideCard from "../../components/InsideCard/InsideCard";
import Container from "../../layouts/Container/Container.jsx";
import Button from "../../ui/Button/Button.jsx";

import iconGraf from "../../assets/icons/icon-graf.svg";
import iconLoudSpeaker from "../../assets/icons/icon-loudspeaker.svg";
import iconUser from "../../assets/icons/icon-user.svg";

import "./HeroSection.css";

const insiderCardData = [
  {
    icon: iconGraf,
    iconAlt: `icon-of-Graf`,
    title: `Repeat Purchases' up by 22%`,
    description: "Revenue Source",
  },
  {
    icon: iconLoudSpeaker,
    iconAlt: `icon-of-Loud-Speaker`,
    title: `Ad Set 'B' ROI decreased by 15%`,
    description: "TikTok Campaign",
  },
  {
    icon: iconUser,
    iconAlt: `icon-of-User`,
    title: `Users who watched 'Demo Video' converted 40% higher`,
    description: "Customer Habits",
  },
];

const HERO_CONTENT = {
  title: "AI assistant for Sales & Marketing Analytics",
  description:
    "Turn sales and marketing data chaos into clear, actionable insights. " +
    "Our AI assistant automates analytics, uncovers hidden opportunities, " +
    "and helps you make decisions that accelerate your business growth.",
};

const HeroSection = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">{HERO_CONTENT.title}</h1>
            <h3 className="hero__description">{HERO_CONTENT.description}</h3>
          </div>

          <div className="hero__cards">
            {insiderCardData.map((item) => (
              <InsideCard
                key={item.iconAlt}
                icon={item.icon}
                iconAlt={item.iconAlt}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="hero__buttons">
            <Button text={"Try now"} variant={"opaque"} />
            <Button text={"Get demo"} variant={"transparent"} />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default HeroSection;
