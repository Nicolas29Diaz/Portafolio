import React from "react";
import styles from "./BasicInfo.module.css";
function BasicInfo() {
  return (
    <section className={styles.section}>
      <ul className={styles.ulContainer}>
        <li className={styles.liInfo}>
          <img src="Images/AboutImages/IconName.webp" alt="IconName" />
          <div>
            <h2>Name:</h2>
            <p>Nicolas Diaz Santos</p>
          </div>
        </li>
        <li className={styles.liInfo}>
          <img src="Images/AboutImages/IconAge.webp" alt="IconName" />
          <div>
            <h2>Age:</h2>
            <p>21</p>
          </div>
        </li>
        {/* <li className={styles.liInfo}>
          <img src="Images/AboutImages/IconFrom.webp" alt="IconName" />
          <div>
            <h2>From:</h2>
            <p>Colombia</p>
          </div>
        </li> */}
        <li className={styles.liInfo}>
          <img src="Images/AboutImages/IconProfession.webp" alt="IconName" />
          <div>
            <h2> Profession:</h2>
            <p> Multimedia Engineer</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default BasicInfo;
