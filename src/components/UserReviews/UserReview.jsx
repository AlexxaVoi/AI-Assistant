import HeaderLogo from "../../layouts/Header/HeaderLogo";
import UserAnnotation from "./UserAnnotation.jsx";
import "./UserReview.css";

const USERREVIEWDATA = [
  {
    id: 1,
    comment:
      "As a small business owner, I wear many hats. I don't have time to get lost in spreadsheets. MegaAI's platform is incredibly intuitive. The mobile app lets me check key performance indicators from anywhere.",
    userName: "David Chen",
  },
];

const UserReview = () => {
  return (
    <article className="review">
      <nav className="review__nav">
        <HeaderLogo />
      </nav>
      {USERREVIEWDATA.map((item) => (
        <UserAnnotation
          comment={item.comment}
          userName={item.userName}
          key={item.id}
        />
      ))}
    </article>
  );
};

export default UserReview;
