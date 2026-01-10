import "./CardAIFunction.css";

const CardAIFunction = ({ icon, iconAlt, text, background }) => {
  return (
    <article
      className="ai-function-card"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <img className="ai-function-card__icon" src={icon} alt={iconAlt} />
      <p className="ai-function-card__text">{text}</p>
    </article>
  );
};
export default CardAIFunction;
