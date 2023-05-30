import React from "react";
import styles from "./Portfolio.module.css";
import { portfolio } from "./portfoldata";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className={`${styles.portfolio} ${styles.section}`}>
      <h2 className={styles.subtitle}>Portfolio</h2>
      <div className={`${styles.portfolio_container} ${styles.grid}`}>
        <PortfolioList portfolio={portfolio} />
      </div>
    </section>
  );
}

function PortfolioList({ portfolio }) {
  return (
    <>
      {portfolio.map((item, i) => {
        return (
          <div className={styles.portfolio_item} key={i}>
            <img src={item.img} />
            <Link
              target="_blank"
              to={item.link}
              className={styles.portfolio_hover}
            >
              <h3 className={styles.portfolio_title}>{item.title}</h3>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Portfolio;
