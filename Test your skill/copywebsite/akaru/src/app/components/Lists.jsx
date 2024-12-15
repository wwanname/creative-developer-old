/* eslint-disable react/display-name */
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { animation, animation1, animation2 } from "./anim";
import MotionSpan from "./useMemo/MotionSpan";

const Lists = ({ targetRef, scrollYProgress }) => {
  const x1 = useTransform(scrollYProgress, [0, 0.3], ["0%", "0%"]);
  const x2 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    ["-50%", "-10%", "0%"]
  );
  const x3 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4, 0.6, 0.8],
    ["-139%", "-62%", "-50%", "-31%", "-10%", "0%"]
  );
  const y1 = useTransform(scrollYProgress, [0, 0.3], ["2%", "0%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  const y2 = useTransform(scrollYProgress, [0, 0.6], ["20%", "0%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  const y3 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.5, 0.7, 0.8],
    ["30%", "20%", "9%", "3%", "1%", "0%"],
    {
      ease: cubicBezier(0.33, 1, 0.68, 1),
    },
    { clamp: true }
  );
  const scaleSmall1 = useTransform(scrollYProgress, [0, 0.3], ["60%", "100%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  const scaleSmall2 = useTransform(scrollYProgress, [0, 0.6], ["40%", "100%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  const scaleSmall3 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8],
    ["20%", "80%", "100%"],
    {
      ease: cubicBezier(0.33, 1, 0.68, 1),
    }
  );
  const scaleBig1 = useTransform(scrollYProgress, [0, 0.3], ["140%", "100%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  const scaleBig2 = useTransform(scrollYProgress, [0, 0.6], ["130%", "100%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  const scaleBig3 = useTransform(scrollYProgress, [0, 0.8], ["140%", "100%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });

  const Information = [
    {
      index: "1",
      Titleindex: "2",
      Zindex: "2",
      Number: "01",
      Year: "2020",
      Job: "Direction artistique",
      Where: "Baskets éco responsables",
      Client: "Ubac store",
      Color: "#b792a2",
      src: "https://cdn.sanity.io/images/zvxprgaj/production/3f5c4c6b0dd9c8baced3d27dd43a31f6f618f5ed-3600x1720.jpg?w=2028&h=1140&q=80&fit=crop&auto=format",
      x: x1,
      y: y1,
      scale: scaleSmall1,
      scaleBig: scaleBig1,
      transformOrigin: "center",
    },
    {
      index: "2",
      Titleindex: "12",
      Zindex: "8",
      Number: "02",
      Year: "2020",
      Job: "Direction artistique",
      Where: "Les portes du soleil",
      Client: "Avoriaz",
      Color: "#becbdb",
      src: "https://cdn.sanity.io/images/zvxprgaj/production/b7577dd97610ac59f5a792461ae8a6c6b56264a1-3600x1720.jpg?w=1280&h=720&q=80&fit=crop&auto=format",
      x: x2,
      y: y2,
      scale: scaleSmall2,
      scaleBig: scaleBig2,
      transformOrigin: "bottom left",
    },
    {
      index: "3",
      Titleindex: "24",
      Zindex: "9",
      Number: "03",
      Year: "2023",
      Job: "Direction artistique",
      Where: "To the moon",
      Client: "Sanctuary",
      Color: "#7a8f7b",
      src: "https://cdn.sanity.io/images/zvxprgaj/production/724006a122cd59c8a0a8622305e029b82bc26b87-3600x2025.jpg?w=1280&h=720&q=80&fit=crop&rect=0,0,3600,2025&fp-x=0.5&fp-y=0.5&auto=format",
      x: x3,
      y: y3,
      scale: scaleSmall3,
      scaleBig: scaleBig3,
      transformOrigin: "bottom left",
    },
  ];

  return (
    <>
      {Information.map((info, index) => {
        return (
          <motion.div
            ref={targetRef}
            id={info.index}
            key={`d_${index}`}
            className={`shrink-0 w-3/4 h-screen relative bg-[${info.Color}]`} //flex-shrink-0 or shrink-0 !!important
            style={{
              transformOrigin: "bottom left",
              zIndex: 5 * info.Zindex,
              x: info.x,
            }}
          >
            <motion.a
              href=""
              style={{
                transformOrigin: "bottom left",
                scale: info.scale,
                y: info.y,
              }}
              className="block w-full max-h-[66dvh] aspect-[1.77778/1]"
            >
              <motion.div className="overflow-hidden w-full h-full">
                <motion.img
                  src={info.src}
                  alt={info.Client}
                  width={3600 / 2}
                  height={2080 / 2}
                  style={{
                    scale: info.scaleBig,
                    transformOrigin: info.transformOrigin,
                  }}
                />
              </motion.div>
            </motion.a>
            <div className="h-full overflow-hidden">
              <div id="Title" className="p-[1rem]">
                <div className="flex justify-start">
                  <Year info={info} index={info.Titleindex} />
                  <Job info={info} index={info.Titleindex} />
                  <Where info={info} index={info.Titleindex} />
                </div>
                <Title info={info} index={info.Titleindex} />
                {/* <Number info={info} index={info.Titleindex} /> */}
              </div>
            </div>
            <span
              id="Number"
              className="absolute bottom-0 p-2 text-xs font-semibold"
            >
              {info.Number}
            </span>
          </motion.div>
        );
      })}
    </>
  );
};

export default Lists;

const Title = ({ info, index }) => {
  const { scrollY } = useScroll();
  const [Titleanimation, setAnimation] = useState("enter");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get();
      if (scrollPosition > 90 * index) {
        setAnimation("enter");
      } else {
        setAnimation("exit");
      }
    };

    handleScroll();
    return scrollY.on("change", handleScroll);
  }, [index, scrollY]);

  // const body = useRef(null);
  // const isInView = useInView(body, { margin: "1000% 0% 1000% 1000%" });

  // const animationVariants = useMemo(() => animation, []);

  return (
    <div className="w-full relative flex justify-center items-center">
      <a className="relative block overflow-hidden whitespace-nowrap text-[5.6rem] tracking-[-0.02rem] antialiased font-[Alliance]">
        {info.Client.split("").map((divide, index) => (
          <motion.span
            // ref={body}
            key={index}
            custom={index}
            variants={animation}
            initial="initial"
            // animate={isInView ? "enter" : "exit"}
            animate={Titleanimation}
            className="inline-block"
          >
            {divide}
          </motion.span>
        ))}
      </a>
    </div>
  );
};

const Year = ({ info, index }) => {
  const { scrollY } = useScroll();
  const [Titleanimation, setAnimation] = useState("enter");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get();
      if (scrollPosition > 90 * index) {
        setAnimation("enter");
      } else {
        setAnimation("exit");
      }
    };

    handleScroll();
    return scrollY.on("change", handleScroll);
  }, [index, scrollY]);

  return (
    // <LazyMotion features={loadFeatures} strict>
    <a className="overflow-hidden">
      <motion.span
        variants={animation1}
        initial="initial"
        animate={Titleanimation}
        id="AppYear"
        className="inline-block rounded-[3rem] shadow-outline-AppYear px-[1.5rem] py-[0.5rem] font-[Alliance] font-semibold"
      >
        {info.Year}
      </motion.span>
    </a>
    // </LazyMotion>
  );
};

const Job = ({ info, index }) => {
  const { scrollY } = useScroll();
  const [Titleanimation, setAnimation] = useState("enter");

  useMemo(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get();
      if (scrollPosition > 90 * index) {
        setAnimation("enter");
      } else {
        setAnimation("exit");
      }
    };

    handleScroll();
    return scrollY.on("change", handleScroll);
  }, [index, scrollY]);

  return (
    <a className="overflow-hidden flex self-center flex-row-reverse basis-[50%]">
      <motion.span
        id="Job"
        variants={animation2}
        initial="initial"
        animate={Titleanimation}
        className="tracking-tighter font-[Alliance] uppercase text-[0.9rem]"
      >
        {info.Job}
      </motion.span>
    </a>
  );
};

const Where = ({ info, index }) => {
  const { scrollY } = useScroll();
  const [Titleanimation, setAnimation] = useState("enter");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get();
      if (scrollPosition > 90 * index) {
        setAnimation("enter");
      } else {
        setAnimation("exit");
      }
    };

    handleScroll();
    return scrollY.on("change", handleScroll);
  }, [index, scrollY]);

  return (
    <a className="overflow-hidden flex self-center flex-row-reverse basis-[30%]">
      <motion.span
        variants={animation2}
        initial="initial"
        animate={Titleanimation}
        id="Where"
        className="tracking-tighter font-[Alliance] uppercase text-[0.9rem]"
      >
        {info.Where}
      </motion.span>
    </a>
  );
};

const Number = ({ info, index }) => {
  const { scrollY } = useScroll();
  const [Titleanimation, setAnimation] = useState("enter");

  useMemo(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get();
      if (scrollPosition > 90 * index) {
        setAnimation("enter");
      } else {
        setAnimation("exit");
      }
    };

    handleScroll();
    return scrollY.on("change", handleScroll);
  }, [index, scrollY]);

  return (
    <a>
      <motion.span
        variants={animation2}
        initial="initial"
        // animate={Titleanimation}
        id="Number"
        className="absolute bottom-0 p-2"
      >
        {info.Number}
      </motion.span>
    </a>
  );
};
