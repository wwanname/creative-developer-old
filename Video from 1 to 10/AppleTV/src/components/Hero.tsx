import { useRef } from "react";
import { Button } from "../children/button";
import { Container } from "../children/container";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0]);

  return (
    <div className="bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200dvh] w-full"
      >
        <img
          src="/poster/napoleon.webp"
          className="sticky top-0 h-screen w-full object-cover"
          alt="hero"
        />
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileInView="visible"
          animate="hidden"
          viewport={{ amount: 1 }}
          className="flex h-full flex-col items-start justify-end"
        >
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>
          <Button className="mb-16" size="large">
            Stream now
          </Button>
          <p className="font-semibold">Watch on the 📺 app.</p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
