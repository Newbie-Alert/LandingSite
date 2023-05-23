import React from "react";
import styles from "./Info.module.css";
import { personalInfo } from "./infodata";

function Info() {
  return (
    <>
      {personalInfo.map((item, i) => {
        return (
          <li className={styles.info_item} key={i}>
            <span className={styles.info_title}>{item.title}</span>
            <span className={styles.info_description}>{item.description}</span>
          </li>
        );
      })}
    </>
  );
}

export default Info;
