import "./CardAIFunction.css";

const CardAIFunction = ({ icon, iconAlt, text, background }) => {
  return (
    <article
      className="ai-function__card"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <img className="card-icon" src={icon} alt={iconAlt} />
      <p className="card-text">{text}</p>
    </article>
  );
};
export default CardAIFunction;
