import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../Header/anim";

export default function Index({ data, isActive }) {
  return (
    <motion.div
      custom={[0.05 * data.index, 0.02 * data.index]}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.link}
    >
      <Link href={data.href}>{data.title}</Link>
    </motion.div>
  );
}
