/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { Button } from "./Button";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface InformationItem {
  id: string;
  Title: string;
  Background: string;
  Description1: string;
  Description2: string;
  Description3: string;
  Description4: string;
  Description5: string;
  Description6: string;
  Description7?: string;
  Description8?: string;
  Image: string;
  x?: MotionValue<string>;
  scale?: MotionValue<string>;
  MinusX?: MotionValue<string>;
  xImg?: MotionValue<string>;
  scaleBig?: MotionValue<string>;
}

export default function Expertises() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "-100%"]);
  const x2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    ["80%", "0%", "-100%"]
  );
  const x3 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    ["95%", "80%", "0%", "-100%"]
  );
  const x4 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["100%", "95%", "80%", "0%", "-100%"]
  );
  const MinusX1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "100%"]);
  const MinusX2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    ["-80%", "0%", "100%"]
  );
  const MinusX3 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    ["-95%", "-80%", "0%", "100%"]
  );
  const MinusX4 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["-100%", "-95%", "-80%", "0%", "100%"]
  );
  const scale1 = useTransform(scrollYProgress, [0, 0.25], ["120%", "100%"]);
  const scale2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    ["70%", "120%", "100%"]
  );
  const scale3 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    ["35%", "70%", "120%", "100%"]
  );
  const scale4 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0%", "35%", "70%", "120%", "100%"]
  );
  const scaleBig1 = useTransform(scrollYProgress, [0, 0.25], ["100%", "120%"]);
  const scaleBig2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    ["140%", "100%", "120%"]
  );
  const scaleBig3 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    ["180%", "140%", "100%", "120%"]
  );
  const scaleBig4 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["200%", "180%", "140%", "100%", "120%"]
  );
  const xImg1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "-150%"]);
  const xImg2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    ["60%", "0%", "-150%"]
  );
  const xImg3 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    ["72%", "60%", "0%", "-150%"]
  );
  const xImg4 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["72%", "72%", "60%", "0%", "-150%"]
  );

  const Information: InformationItem[] = [
    {
      id: "1",
      Title: "Stratégie & Conseil",
      Background: "#bfccd8",
      Description1: "Audit & benchmark",
      Description2: "Positionnement",
      Description3: "Image de marque",
      Description4: "Stratégie digitale",
      Description5: "Stratégie éditoriale",
      Description6: "Accompagnement",
      Image:
        "https://cdn.sanity.io/images/zvxprgaj/production/f95ae49c2accec3c6f28026f270343eb5ab2cd6f-1580x1580.jpg?w=1280&h=928&q=80&fit=crop&auto=format",
      scale: scale1,
      Description7: undefined,
      Description8: undefined,
      x: x1,
      MinusX: MinusX1,
      xImg: xImg1,
      scaleBig: scaleBig1,
    },
    {
      id: "2",
      Title: "Direction Artistique",
      Background: "#b792a2",
      Description1: "Identité visuelle",
      Description2: "Logo",
      Description3: "Charte graphique",
      Description4: "Design graphique",
      Description5: "Maquettes et prototypes",
      Description6: "UI & UX design",
      Image:
        "https://cdn.sanity.io/images/zvxprgaj/production/66c85d9f02641651fcb71673a5082f03e4605b5c-1580x1580.jpg?w=1280&h=928&q=80&fit=crop&auto=format",
      x: x2,
      scale: scale2,
      Description7: undefined,
      Description8: undefined,
      MinusX: MinusX2,
      xImg: xImg2,
      scaleBig: scaleBig2,
    },
    {
      id: "3",
      Title: "Site Vitrine",
      Background: "#f0efeb",
      Description1: "Front-end",
      Description2: "Back-end (CMS)",
      Description3: "Animations CSS",
      Description4: "Interactions",
      Description5: "Expérience digital",
      Description6: "Webgl (3D)",
      Image:
        "https://cdn.sanity.io/images/zvxprgaj/production/8da3d80e45c9838650a8c587441b5475fe1b9bb1-1580x1580.jpg?w=1280&h=928&q=80&fit=crop&auto=format",
      x: x3,
      scale: scale3,
      Description7: undefined,
      Description8: undefined,
      MinusX: MinusX3,
      xImg: xImg3,
      scaleBig: scaleBig3,
    },
    {
      id: "4",
      Title: "Expérience Digitale",
      Background: "#e49367",
      Description1: "Landing page",
      Description2: "Jeux concours",
      Description3: "Gaming",
      Description4: "Storyboard",
      Description5: "Direction Artistique",
      Description6: "UX/UI",
      Description7: "Dévéloppement WebGL",
      Description8: "3D",
      Image:
        "https://cdn.sanity.io/images/zvxprgaj/production/4bcc343a1d89969391cd79bf875e8481ea07ae7e-1580x1580.jpg?w=1280&h=928&q=80&fit=crop&auto=format",
      x: x4,
      scale: scale4,
      MinusX: MinusX4,
      xImg: xImg4,
      scaleBig: scaleBig4,
    },
  ];

  return (
    <main ref={targetRef} className="relative h-[400dvh]">
      <div className="sticky top-0">
        <div className="flex flex-nowrap">
          {Information.map((info, index) => (
            <>
              <motion.div
                style={{
                  zIndex: Number(info.id) * 10,
                  x: info.x,
                }}
                className={`w-full h-screen absolute overflow-hidden flex-shrink-0`}
              >
                <motion.div
                  style={{
                    backgroundColor: info.Background,
                    transformOrigin: "bottom right",
                    x: info.MinusX,
                  }}
                  className="w-full h-screen px-96 py-[10vh]"
                >
                  <div className="w-full h-full relative">
                    <motion.div
                      style={{
                        transformOrigin: "bottom right",
                        scale: info.scale,
                        x: info.xImg,
                      }}
                      className="block absolute right-0 bottom-0 pointer-events-none"
                    >
                      <div className="aspect-[914/663] overflow-hidden">
                        <motion.img
                          src={info.Image}
                          alt={info.Title}
                          width={1280 / 2.4}
                          height={928 / 2.4}
                          style={{
                            scale: info.scaleBig,
                            transformOrigin: "center",
                          }}
                        />
                      </div>
                    </motion.div>
                    <h1 className="text-8xl font-[Alliance]">Expertises</h1>
                    <h2
                      key={`s_${index}`}
                      className="text-4xl font-[Alliance] font-medium pt-28 pb-14"
                    >
                      {info.Title}
                    </h2>
                    <section
                      id="Text"
                      className="flex flex-wrap w-96 font-semibold text-sm font-[Alliance] uppercase"
                    >
                      <h5 className="pr-8 pb-2 before:p-1 before:content-['/'] before:font-light">
                        {info.Description1}
                      </h5>
                      <h5 className="pb-2 before:p-1 before:content-['/'] before:font-light">
                        {info.Description2}
                      </h5>
                      <h5 className="pr-8 pb-2 before:p-1 before:content-['/'] before:font-light">
                        {info.Description3}
                      </h5>
                      <h5 className="pb-2 before:p-1 before:content-['/'] before:font-light">
                        {info.Description4}
                      </h5>
                      <h5 className="pr-8 pb-2 before:p-1 before:content-['/'] before:font-light">
                        {info.Description5}
                      </h5>
                      <h5 className="pb-2 before:p-1 before:content-['/'] before:font-light">
                        {info.Description6}
                      </h5>
                      <h5 className="pb-2 before:p-1 before:content-['/'] before:font-light">
                        {info.Description7}
                      </h5>
                      <h5 className="pb-2 before:p-1 before:content-['/'] before:font-light">
                        {info.Description8}
                      </h5>
                      <div className="pt-10">
                        <Button />
                      </div>
                    </section>
                  </div>
                </motion.div>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}
