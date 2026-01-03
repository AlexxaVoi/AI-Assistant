import CardAIFunction from "./CardAIFunction";

import iconReport from "../../assets/icons/icon-report.svg";
import iconCalculation from "../../assets/icons/icon-calculation.svg";
import iconLineGraf from "../../assets/icons/icon-line-graf.svg";
import iconColumbGraf from "../../assets/icons/icon-columb-graf.svg";
import iconDiagram from "../../assets/icons/icon-diagram.svg";

import bgReport from "../../assets/img/card-bg-report.png";
import bgCalculation from "../../assets/img/card-bg-calculation.png";
import bgLineGraf from "../../assets/img/card-bg-line-graf.png";
import bgColumbGraf from "../../assets/img/card-bg-columb-graf.png";
import bgDiagram from "../../assets/img/card-bg-diagram.png";

import "./AIFunctionCardList.css";

const featureData = [
  {
    icon: iconReport,
    iconAlt: "icon-of-report",
    text: "Automatic report generation",
    background: bgReport,
  },
  {
    icon: iconCalculation,
    iconAlt: "icon-of-calculation",
    text: "Conversion-boosting recommendations",
    background: bgCalculation,
  },

  {
    icon: iconLineGraf,
    iconAlt: "icon-of-line-graf",
    text: "Revenue forecasting with up to 92% accuracy",
    background: bgLineGraf,
  },

  {
    icon: iconColumbGraf,
    iconAlt: "icon-of-columb-graf",
    text: "Increased sales through precise analytics",
    background: bgColumbGraf,
  },

  {
    icon: iconDiagram,
    iconAlt: "icon-of-diagram",
    text: "Customer behavior analysis",
    background: bgDiagram,
  },
];

const AIFunctionCardList = () => {
  return (
    <div className="ai-function">
      {featureData.map((item) => (
        <CardAIFunction
          key={item.iconAlt}
          icon={item.icon}
          iconAlt={item.iconAlt}
          text={item.text}
          background={item.background}
        />
      ))}
    </div>
  );
};
export default AIFunctionCardList;
