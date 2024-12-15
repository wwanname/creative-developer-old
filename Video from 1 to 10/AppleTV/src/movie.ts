export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  { poster: "/public/poster/airplane.webp", name: "Airplane" },
  {
    poster: "/public/poster/family-man.webp",
    name: "Family man",
  },
  {
    poster: "/public/poster/laboratory.webp",
    name: "Laboratory",
  },
  { poster: "/public/poster/napoleon.webp", name: "Napoleon" },
  {
    poster: "/public/poster/person-in-darkness.webp",
    name: "Person in Darkness",
  },
  {
    poster: "/public/poster/scary-building.webp",
    name: "Scary Building",
  },
  { poster: "/public/poster/stars.webp", name: "Stars" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
