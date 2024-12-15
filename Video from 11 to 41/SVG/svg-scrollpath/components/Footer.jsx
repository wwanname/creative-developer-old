/* eslint-disable @next/next/no-img-element */
import React, { useLayoutEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Footer() {
  const container = useRef(null);
  const texts = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useLayoutEffect(() => {
    const handleScroll = (e) => {
      //là cách để đăng ký sự kiện cho các thay đổi cuộn
      texts.current.forEach((text, i) => {
        //forEach là từng phần tử
        text.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%"); // i là từng mảng, e là giá trị của sự kiện cuộn (scroll event) thường dùng
        //setAttribute dùng để thiết lập giá trị phần tử
        //element.setAttribute(name, value);
      });
    }

    return scrollYProgress.on("change", handleScroll);
  }, [scrollYProgress]);

  return (
    <div ref={container}>
      <svg className="w-full mb-40" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-[6px] uppercase" style={{ color: "red" }}>
          {[...Array(3)].map((_, i) => {
            return (
              <textPath
                key={i}
                ref={(ref) => (texts.current[i] = ref)}
                href="#curve"
                startOffset={i} // giá trị khi chưa animation
              >
                Curabitur mattis efficitur velit
              </textPath>
            );
          })}
        </text>
      </svg>
      <Logos scrollYProgress={scrollYProgress} />
    </div>
  );
}

function Logos({ scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], [-1000, 0]); //kiểu mới

  return (
    <div className="h-[250px] overflow-hidden bg-black">
      <motion.div
        style={{ y }}
        className="flex items-center justify-center gap-5 h-full"
      >
        {[...Array(5)].map((_, i) => {
          return (
            <img
              className="h-[80px] w-[80px]"
              key={i + "i"}
              src={`/medias/${i + 1}.jpg`}
              alt=""
            ></img>
          );
        })}
      </motion.div>
    </div>
  );
}
