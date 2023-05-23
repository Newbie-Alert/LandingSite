import React from "react";
import { skills } from "./skilldata";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./skills.module.css";

function Skills() {
  return (
    <>
      {skills.map((item, i) => {
        return (
          <div className={styles.progress_box} key={i}>
            <h3 className={styles.skill_title}>{item.title}</h3>
            <div className={styles.progress_circle}>
              <CircularProgressbar
                strokeWidth={6}
                text={`${item.percentage}`}
                value={item.percentage}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Skills;
