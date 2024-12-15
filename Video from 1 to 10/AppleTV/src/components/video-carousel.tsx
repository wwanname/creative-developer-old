import { useScroll, useTransform, motion } from "framer-motion";
import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "../movie";
import { useRef, useMemo } from "react";
import { useWindowSize } from "react-use";

export const VideoCarousel = () => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null); //
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end end"],
  });

  const { width, height } = useWindowSize;
  const maxiumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [height, width]);

  const scale = useTransform(scrollYProgress, [1, 0.8, 0], [3, 2.2, 1]); //

  const postersOpacity = useTransform(scrollYProgress, [0.64, 1], [0, 1]); //
  const posterTranslateXLeft = useTransform(
    //
    scrollYProgress,
    [0.64, 1],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    //
    scrollYProgress,
    [0.64, 1],
    [20, 0]
  );

  return (
    <>
      <div className="bg-background pb-8">
        <div className="mt-[-100vh] overflow-clip h-[300dvh]">
          <div className="h-screen sticky top-0 flex items-center">
            <div className="flex gap-5 relative rounded-2xl mb-5 left-1/2 -translate-x-1/2">
              <motion.div
                style={{ opacity: postersOpacity, x: posterTranslateXLeft }} //
                className="aspect-video w-[60dvw] rounded-2xl overflow-clip"
              >
                <img
                  className="w-full h-full object-cover"
                  src={movies[0].poster}
                  alt={movies[0].name}
                />
              </motion.div>
              <motion.div
                style={{ scale }}
                ref={carouselWrapperRef}
                className="aspect-video flex-shrink-0 w-[60dvw] z-10 rounded-2xl overflow-clip"
              >
                <img
                  className="w-full h-full object-cover"
                  src={movies[4].poster}
                  alt={movies[4].name}
                />
              </motion.div>
              <motion.div
                style={{ opacity: postersOpacity, x: posterTranslateXRight }}
                className="aspect-video flex-shrink-0 w-[60dvw] rounded-2xl overflow-clip"
              >
                <img
                  className="w-full h-full object-cover"
                  src={movies[2].poster}
                  alt={movies[2].name}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-[100dvw(calc(60dvw*(16/9)/2))] space-y-5"
        >
          <SmallVideoCarousel movies={randomMoviesSet1} />
          <div className="[--duration:68s]">
            <SmallVideoCarousel movies={randomMoviesSet2} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="flex gap-3 animate-carousel-move relative left-[var(--carousel-offset,0px)]">
        {movies.map((movie, index) => (
          <div className="w-[30vw] flex-shrink-0">
            <img
              className="object-cover w-full h-full rounded-2xl"
              src={movie.poster}
              alt={movie.name}
              key={`${movie.name}-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
