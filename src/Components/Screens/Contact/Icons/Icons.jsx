import React from "react";
import styles from "./Icons.module.css";

function Icons() {
  return (
    <nav className={styles.iconNav}>
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
          <a href="https://www.linkedin.com/in/nicolassdiazs/" target="_blank">
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
  );
}

export default Icons;
