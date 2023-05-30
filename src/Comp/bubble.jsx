import { Link } from "react-router-dom";
import styles from "./bubble.module.css";
import { FaFolder, FaHome, FaUser } from "react-icons/fa";

function Bubble() {
  return (
    <div className={styles.bubble_container}>
      <Link to={"/"} className={styles.bubble_link}>
        <h3 className={`${styles.bubble_text} ${styles.home}`}>Home</h3>
        <FaHome className={styles.bubble_icon} />
      </Link>
      <Link to={"/about"} className={styles.bubble_link}>
        <h3 className={`${styles.bubble_text} ${styles.about}`}>About</h3>
        <FaUser className={styles.bubble_icon} />
      </Link>
      <Link to={"/portfolio"} className={styles.bubble_link}>
        <h3 className={`${styles.bubble_text} ${styles.pf}`}>Portfolio</h3>
        <FaFolder className={styles.bubble_icon} />
      </Link>
    </div>
  );
}

export default Bubble;
