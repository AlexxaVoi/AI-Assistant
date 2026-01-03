import "./InsideCard.css";

const InsideCard = ({ icon, iconAlt, title, description }) => {
  return (
    <article className="insight-card">
      <div className="insight-card__content">
        <img className="insight-card__icon" src={icon} alt={iconAlt} />
        <div className="insight-card__text">
          <p className="insight-card__title">{title}</p>
          <p className="insight-card__description">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default InsideCard;
