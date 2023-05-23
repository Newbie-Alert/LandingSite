import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import { AiOutlineClosem, AiOutlineMenu } from "react-icons/ai";
import links from "./navdata";
import { NavLink } from "react-router-dom";

function Navigation() {
  let [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.nav}>
      <AiOutlineMenu
        className={styles.menu_button}
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className={
          showMenu == true
            ? `${styles.nav_menu} ${styles.show_menu}`
            : `${styles.nav_menu}`
        }
      >
        <ul className={styles.nav_list}>
          {links.map((item, i) => {
            return (
              <li
                className={styles.nav_item}
                key={i}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <NavLink to={item.path} className={styles.nav_link}>
                  {item.icon}
                  <h3 className={styles.nav_name}>{item.name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
