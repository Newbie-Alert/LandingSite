import React from "react";
import styles from "./About.module.css";
import Info from "../../Comp/info";
import Stat from "../../Comp/Stat";
import Skills from "../../Comp/skills";
import { education } from "../../Comp/resumedata";

function About() {
  return (
    <main className={`${styles.section} ${styles.container}`}>
      <section className={styles.about}>
        <h2 className={styles.title}>
          About <span>Me</span>
        </h2>

        <div className={`${styles.about_contents} ${styles.grid}`}>
          <div className={styles.about_info}>
            <h3 className={styles.personal_info}>Personal Info</h3>

            <ul className={`${styles.info_list} ${styles.grid}`}>
              <Info />
            </ul>
          </div>

          <div className={`${styles.stat} ${styles.grid}`}>
            <Stat />
          </div>
        </div>
      </section>

      <div className={styles.separate}></div>

      <section className={styles.skills}>
        <h3 className={styles.subtitle}>
          My <span>Skills</span>
        </h3>
        <div className={`${styles.skills_container} ${styles.grid}`}>
          <Skills />
        </div>
      </section>

      <div className={styles.separate}></div>

      <section className={styles.resume}>
        <h3 className={styles.subtitle}>
          <span>Education</span>
        </h3>
        <div className={`${styles.resume_container} ${styles.grid}`}>
          <div className={styles.resume_data}>
            {education.map((item, i) => {
              return (
                <div className={styles.resume_item} key={i}>
                  <div className={styles.resume_icon}>{item.icon}</div>
                  <span className={styles.resume_date}>{item.year}</span>
                  <h3 className={styles.resume_title}>{item.title}</h3>
                  <p className={styles.resume_desc}>- {item.description}</p>
                  <p className={styles.resume_subdesc}>- {item.subdesc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
