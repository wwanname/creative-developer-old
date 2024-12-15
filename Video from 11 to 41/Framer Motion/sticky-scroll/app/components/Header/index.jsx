import styles from "./style.module.scss";
import Magnetic from "../magnetic";
import { forwardRef } from "react";

const Header = forwardRef(function index(props, ref) {
  //phải dùng forwardRef để truyền props, dùng cách bình thường không hoạt động?
  return (
    <div className={styles.header}>
      <Magnetic>
        <div className={styles.burger}>
          <div ref={ref} className={styles.bounds}></div>
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;
