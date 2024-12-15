import { forwardRef } from "react";
import style from "./header.module.css";
import Magantic from "./Magantic";

const Header = forwardRef(function index(props, ref) {
    return (
      <div className={style.header}>
        <Magantic ref={ref}>
          <div className={style.burger}>
            <div ref={ref} className={style.bounds} />
          </div>
        </Magantic>
      </div>
    )
  })

export default Header