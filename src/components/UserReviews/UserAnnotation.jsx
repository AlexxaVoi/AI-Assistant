import "./UserAnnotation.css";

const UserAnnotation = ({ comment, userName }) => {
  return (
    <div className="review__content">
      <p className="review__comment">"{comment}"</p>
      <p className="review__user-name">
        <strong>– {userName}</strong>
      </p>
    </div>
  );
};

export default UserAnnotation;
