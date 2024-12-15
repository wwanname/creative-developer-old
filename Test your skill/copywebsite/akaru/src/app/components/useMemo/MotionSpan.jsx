import React from "react";
import { motion } from "framer-motion";

// Tạo thành phần wrapper cho motion.span và ghi nhớ nó với React.memo
// eslint-disable-next-line react/display-name
const MotionSpan = React.memo(
  ({ children, variants, initial, animate, ...props }) => {
    return (
      <motion.span
        variants={variants}
        initial={initial}
        animate={animate}
        {...props}
      >
        {children}
      </motion.span>
    );
  }
);

export default React.memo(MotionSpan);
