import { motion } from "framer-motion"

const anim = {
    initial: {
        opacity: 0
    },
    open: (delay) => ({
        opacity: 1,
        transition: {duration: 0, delay: 0.04 * delay[1]}
    }),
    closed: (delay) => ({
        opacity: 0,
        transition: {duration: 0, delay: 0.04 * delay[0]}
    })
}


export default function index({menuIsActive}) {
    const shuffle = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    const block = () => {
        const {innerWidth, innerHeight} = window;
        const blockSize = Math.ceil(innerWidth * 0.04);
        const amountOfBlocks = Math.ceil(innerHeight / blockSize);
        console.log(amountOfBlocks)
        const ArrayMap = shuffle([...Array(amountOfBlocks)].map((_, i) => i ))
        return ArrayMap.map((randomMap, i) => {
            return (
                <motion.div
                    key={i}
                    variants={anim}
                    initial="initial"
                    animate={menuIsActive ? "open" : "closed"}
                    custom={[randomMap + i, (10 - randomMap + i)]}
                    className="h-full w-[15vw] bg-[#ff4400]"
                />
            )
        })
    }
    return (
        <div className="h-screen pointer-events-none">
            {[...Array(10)].map((_, i) => {
                return (
                    <div key={i} className="w-full h-[10vw] flex">
                        {block(i)}
                    </div>
                )
            })}
        </div>
    )
}