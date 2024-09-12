import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import "./Contact.css";
import Background from "./SVG/Background";
import useStore from "../../../Store/Store";
function Contact() {
  const [animate, setAnimate] = useState(false);

  const { cameraFocus } = useStore();

  useEffect(() => {
    if (cameraFocus === "CONTACT") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [cameraFocus]);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log(event.target[0].value);
    console.log(event.target[1].value);
  };

  return (
    <Html
      className={`contact-html ${animate ? "" : "contact-no-pointer"}`}
      distanceFactor={0.5}
      transform
      occlude="blending"
      position={[0.274, -0.046, 0.44]}
      rotation={[-Math.PI / 9.2, 0, 0]}
    >
      <form action="" className="contact-content" onSubmit={handleSubmit}>
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <div>
          <button type="submit">Send</button>
        </div>
      </form>

      <Background></Background>

      <nav className="contact-icon-row">
        <ul>
          <li>
            <a href="https://github.com/Nicolas29Diaz" target="_blank">
              <img src="/Images/Contact/Github.png"></img>
            </a>
          </li>
          <li>
            <a
              href="mailto:diazsantosnicolas10@gmail.com?Subject=Hola Nicolas!%20Soy%20"
              target="_blank"
            >
              <img src="/Images/Contact/Mail.png"></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nicolassdiazs/"
              target="_blank"
            >
              <img src="/Images/Contact/Linkedin.png"></img>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/3155187755/?text=Hola%20Nicolas!%20%20Soy%20"
              target="_blank"
            >
              <img src="/Images/Contact/Whatsapp.png"></img>
            </a>
          </li>
        </ul>
      </nav>
    </Html>
  );
}

export default Contact;
