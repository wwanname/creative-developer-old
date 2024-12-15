"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import { blur, translate, height, opacity } from "../../header/anim";
import { useState } from "react";

export default function LinkText() {
  const links = [
    {
      title: "Home",
      href: "/",
      src: "home.png",
    },
    {
      title: "Shop",
      href: "/shop",
      src: "shop.png",
    },
    {
      title: "About Us",
      href: "/about",
      src: "home.png",
    },
    {
      title: "Lookbook",
      href: "/lookbook",
      src: "lookbook.png",
    },
    {
      title: "Contact",
      href: "/contact",
      src: "contact.png",
    },
  ];

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.body}>
            {links.map((link, index) => {
              const { title, href } = link;
              return (
                <Link key={`l_${index}`} href={href}>
                  <motion.p
                    onMouseOver={() => {
                      setSelectedLink({ isActive: true, index });
                    }}
                    onMouseLeave={() => {
                      setSelectedLink({ isActive: false, index });
                    }}
                    variants={blur}
                    initial="initial"
                    animate={
                      selectedLink.isActive && selectedLink.index != index //`index đã chọn` không bằng "index còn lại" nên "index còn lại" bị mờ
                        ? "open"
                        : "closed"
                    }
                  >
                    {getChars(title)}
                  </motion.p>
                </Link>
              );
            })}
          </div>
          <div className={styles.footer}>
            <ul>
              <motion.li
                custom={[0.3, 0]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <span>Made by:</span>Studio Lumio
              </motion.li>
            </ul>

            <ul>
              <motion.li
                custom={[0.3, 0]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <span>Typography:</span> Google Fonts
              </motion.li>
            </ul>

            <ul>
              <motion.li
                custom={[0.3, 0]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <span>Images:</span> Freepik, Envato
              </motion.li>
            </ul>

            <ul>
              <motion.li
                custom={[0.3, 0]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                Privacy Policy
              </motion.li>

              <motion.li
                custom={[0.3, 0]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                Terms & Conditions
              </motion.li>
            </ul>
          </div>
        </div>
        <motion.div
          className={styles.imageContainer}
          variants={opacity}
          animate={selectedLink.isActive ? "open" : "closed"} //ảnh
        >
          <Image
            src={`/images/${links[selectedLink.index].src}`}
            fill
            alt="image"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
