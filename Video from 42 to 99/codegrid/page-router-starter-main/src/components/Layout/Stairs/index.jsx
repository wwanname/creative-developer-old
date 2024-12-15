import React from "react";
import { motion } from "framer-motion";
import style from "./style.module.scss"

const caculateRandomBlockDelay = (rowIndex, totalRows) => {
    const blockDelay = Math.random() * 0.5
    const rowDelay = (totalRows - rowIndex) * 0.05
    return blockDelay + rowDelay
}

export default function Layout({ children }) {
    return (
        <>
            <div className={style.transitionIn}>
                {[...Array(10)].map((_, rowIndex) => (
                    <div className={style.row} key={rowIndex}>
                        {[...Array(11)].map((_, blockIndex) => (
                            <motion.div
                                key={blockIndex}
                                className={style.block}
                                initial={{ scaleY: 1 }}
                                animate={{ scaleY: 0 }}
                                exit={{ scaleY: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: caculateRandomBlockDelay(rowIndex, 10)
                                }}
                            >
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
            <div className={style.transitionOut}>
                {Array.from({length: 10}).map((_, rowIndex) => (
                    <div className={style.row} key={rowIndex}>
                        {Array.from({length: 11}).map((_, blockIndex) => (
                            <motion.div
                                key={blockIndex}
                                className={style.block}
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 0 }}
                                exit={{ scaleY: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: caculateRandomBlockDelay(rowIndex, 10)
                                }}
                            >
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
            {children}
        </>
    )
}
