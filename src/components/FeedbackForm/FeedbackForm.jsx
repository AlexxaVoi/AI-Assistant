import Button from "../../ui/Button/Button";

import "./FeedbackForm.css";

const FeedbackForm = () => {
  return (
    <form
      className="feedback"
      action="#"
      method="POST"
      title="Форма для додадкових питань"
    >
      <div className="feedback__field">
        <label htmlFor="username" className="feedback__label">
          Forever
        </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="e.g. John Smith"
          className="feedback__input"
        />
      </div>

      <div className="feedback__field">
        <label htmlFor="address" className="feedback__label">
          Email address
        </label>
        <input
          id="address"
          type="email"
          name="address"
          placeholder="e.g. example@gmail.com"
          className="feedback__input"
        />
      </div>

      <div className="feedback__field">
        <label htmlFor="question" className="feedback__label">
          Question
        </label>
        <textarea
          id="question"
          name="question"
          placeholder="Let’s us know we can help"
          className="feedback__input feedback__input-textarea"
        />
      </div>

      <Button type="submit" text="Send" variant="submit" />
    </form>
  );
};

export default FeedbackForm;
