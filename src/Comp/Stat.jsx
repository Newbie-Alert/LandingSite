import React from "react";
import styles from "./Stat.module.css";
import { stats } from "./Statdata";

function Stat() {
  return (
    <>
      {stats.map((item, i) => {
        return (
          <div className={styles.stat_box} key={i}>
            <h3 className={styles.stat_no}>{item.no}</h3>
            <p className={styles.stat_title}>{item.title}</p>
          </div>
        );
      })}
    </>
  );
}

export default Stat;
