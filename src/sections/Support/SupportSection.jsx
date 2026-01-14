import Container from "../../layouts/Container/Container.jsx";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm.jsx";
import UserReview from "../../components/UserReviews/UserReview.jsx";
import "./SupportSection.css";

const SUPPORT_CONTENT = {
  title: "We’re here to help with your questions",
};

const SupportSection = () => {
  return (
    <section className="support" id="support">
      <Container>
        <div className="support__inner">
          <h2 className="support__title">{SUPPORT_CONTENT.title}</h2>

          <div className="support__contact">
            <FeedbackForm />
            <UserReview />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default SupportSection;
