import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Navigation from "../../Comp/Navigation";

function Home() {
  return (
    <section className={`${styles.home} ${styles.section} ${styles.grid}`}>
      <div className={styles.home_img}>
        <iframe
          src="https://giphy.com/embed/umYMU8G2ixG5mJBDo5"
          height="600"
          frameBorder="0"
          className={styles.giphy_embed}
        ></iframe>
      </div>
      <div className={styles.home_contents}>
        <div className={styles.home_data}>
          <h1 className={styles.home_title}>
            Hi, I'm <span>Rock Kyun🖐️</span>
          </h1>
          <h3 className={styles.home_subtitle}>
            안녕하세요. <b>프론트엔드 공부하는</b> 이락균입니다.
            <br />
          </h3>
          <h3 className={styles.home_description}>
            <li>원리와 이유, 기본 개념에 대한 호기심이 많습니다</li>
            <li>호기심이 많아 자연스럽게 학습으로 이어집니다.</li>
            <li>깊이를 더하기 위해 CS지식과 JS의 세부적인 것을 학습합니다</li>
            <li>MBTI는 INTP입니다😀</li>
          </h3>
          <Link to={"/about"} className={styles.button}>
            About
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
