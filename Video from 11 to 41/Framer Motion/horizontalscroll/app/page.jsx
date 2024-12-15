"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div className="absolute inset-0 z-10 grid place-content-center">
        <Image
          className="absolute inset-0 z-0 bg-cover origin-center transition-transform duration-300 group-hover:scale-110"
          src={`${card.url}`}
          alt={`${card.title}`}
          width={1000}
          height={1000}
        />
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/img-1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/img-2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/img-3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/img-4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/img-5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/img-9.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/img-7.jpg",
    title: "Title 7",
    id: 7,
  },
];
