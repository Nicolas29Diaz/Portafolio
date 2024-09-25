import React, { useState } from "react";
import styles from "./Form.module.css";
function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisibleButton, setVisibleButton] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        "template_fybb9nr",
        event.target
      )
      .then(
        (result) => {
          setIsLoading(false);
          setIsSuccess(true);
          event.target.reset(); // Opcional: Limpiar el formulario después de enviar
        },
        (error) => {
          setIsLoading(false);
          setError("Failed to send message. Please try again.");
          console.log(error);
        }
      );
    setVisibleButton(false);
  };
  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input type="email" name="email_id" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" rows="5" required />
      <div>
        {isVisibleButton && (
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        )}
      </div>
      {isSuccess && (
        <p className={styles.textFeedback}>
          I received the message, thank you for contacting me.
        </p>
      )}
      {error && (
        <p className={`${styles.textFeedback} ${styles.error}`}>
          Message delivery failed. <br />
          Feel free to use another method below to get in touch.
        </p>
      )}
    </form>
  );
}

export default Form;
