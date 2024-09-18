import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import "./Contact.css";
import Background from "./SVG/Background";
import useStore from "../../../Store/Store";
function Contact({ showScreen }) {
  const [animate, setAnimate] = useState(false);

  const { cameraFocus } = useStore();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisibleButton, setVisibleButton] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cameraFocus === "CONTACT") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [cameraFocus]);

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
    <Html
      className={`contact-html ${animate ? "" : "contact-no-pointer"}`}
      distanceFactor={0.5}
      transform
      occlude="blending"
      position={[0.274, -0.046, 0.44]}
      rotation={[-Math.PI / 9.2, 0, 0]}
      visible={showScreen}
    >
      <form className="contact-content" onSubmit={handleSubmit}>
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
          <p className="contact-text-feedback">
            I received the message, thank you for contacting me.
          </p>
        )}
        {error && (
          <p className="contact-text-feedback error">
            Message delivery failed. <br />
            Feel free to use another method below to get in touch.
          </p>
        )}
      </form>

      <Background></Background>

      <nav className="contact-icon-row">
        <ul>
          <li>
            <a href="https://github.com/Nicolas29Diaz" target="_blank">
              <img src="/Images/Contact/GithubContact.webp"></img>
            </a>
          </li>
          <li>
            <a
              href="mailto:diazsantosnicolas10@gmail.com?Subject=Hola Nicolas!%20Soy%20"
              target="_blank"
            >
              <img src="/Images/Contact/Mail.webp"></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nicolassdiazs/"
              target="_blank"
            >
              <img src="/Images/Contact/Linkedin.webp"></img>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/3155187755/?text=Hola%20Nicolas!%20%20Soy%20"
              target="_blank"
            >
              <img src="/Images/Contact/Whatsapp.webp"></img>
            </a>
          </li>
        </ul>
      </nav>
    </Html>
  );
}

export default Contact;
