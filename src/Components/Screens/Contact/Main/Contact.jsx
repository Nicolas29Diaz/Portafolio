import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import styles from "./Contact.module.css";

import Background from "../Background/Background";
import useStore from "../../../../Store/Store";
import Form from "../Form/Form";
import Icons from "../Icons/Icons";

function Contact({ showScreen }) {
  const [animate, setAnimate] = useState(false);
  const { cameraFocus } = useStore();

  useEffect(() => {
    if (cameraFocus === "CONTACT") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [cameraFocus]);

  return (
    <Html
      className={`${styles.html} ${animate ? "" : styles.noPointer}`}
      distanceFactor={1.72}
      transform
      occlude="blending"
      position={[0.274, -0.046, 0.44]}
      rotation={[-Math.PI / 9.2, 0, 0]}
      visible={showScreen}
    >
      <Form></Form>

      <Background></Background>

      {/* <Icons></Icons> */}

      {/* <h1 className={styles.title}>CONTACT ME</h1> */}
    </Html>
  );
}

export default Contact;
