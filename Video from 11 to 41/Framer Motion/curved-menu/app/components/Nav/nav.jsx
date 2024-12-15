import React from "react";
import styles from "./style.module.scss";
import Link from "./Link/link";

const navItems = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Work",
    href: "/work",
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Nav() {
  <div className={styles.menu}>
    <div className={styles.body}>
      <div className={styles.nav}>
        <div className={styles.header}>
          <p>Navigation</p>
          {navItems.map((item, index) => {
            return <Link key={index} data={{ ...item, index }} />;
          })}
        </div>
      </div>
    </div>
  </div>;
}
