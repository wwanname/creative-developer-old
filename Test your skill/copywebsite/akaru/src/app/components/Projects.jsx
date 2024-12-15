import React from "react";
import { motion } from "framer-motion";

const Information = [
  {
    id: 1,
    Title: "Asics",
    Year: "2023",
    Job: "Direction artistique",
    src: "https://cdn.sanity.io/images/zvxprgaj/production/cdfee9c3b68eaadf07a6f9d93aea8c81ef1ea758-1280x720.jpg?w=1280&h=1186&q=80&fit=crop&auto=format",
  },
  {
    id: 2,
    Title: "Maison Yokō",
    Year: "2022",
    Job: "Direction artistique",
    src: "https://cdn.sanity.io/images/zvxprgaj/production/66c85d9f02641651fcb71673a5082f03e4605b5c-1580x1580.jpg?w=1280&h=1186&q=80&fit=crop&auto=format",
  },
  {
    id: 3,
    Title: "Enchanted tools",
    Year: "2022",
    Job: "Site Vitrine",
    src: "https://cdn.sanity.io/images/zvxprgaj/production/1098dd508d2f0a2fa46b95dca235674b35c874bd-2360x1252.jpg?w=1280&h=1186&q=80&fit=crop&auto=format",
  },
  {
    id: 4,
    Title: "Crosscall Stellar-X5",
    Year: "2023",
    Job: "Direction artistique",
    src: "https://cdn.sanity.io/images/zvxprgaj/production/87fda7113795683774e5416b371ff54df3b7bb97-1280x720.jpg?w=1280&h=1186&q=80&fit=crop&auto=format",
  },
  {
    id: 5,
    Title: "Salomon",
    Year: "2022",
    Job: "Experience digitale",
    src: "https://cdn.sanity.io/images/zvxprgaj/production/45876d297cc2a700d9f23ef6000c0044719f8b69-1280x720.jpg?w=1280&h=1186&q=80&fit=crop&auto=format",
  },
  {
    id: 6,
    Title: "Mediakeys",
    Year: "2021",
    Job: "Direction artistique",
    src: "https://cdn.sanity.io/images/zvxprgaj/production/2adbdd682485cfb87766bf41eb99d0c29358604a-1280x720.jpg?w=1280&h=1186&q=80&fit=crop&auto=format",
  },
  {
    id: 7,
    Title: "Alexandre Mertens",
    Year: "2023",
    Job: "Direction artistique",
    src: "https://cdn.sanity.io/images/zvxprgaj/production/ef66d132734765afa009d6762d9ff98ef60e41e2-2560x1440.jpg?w=1280&h=1186&q=80&fit=crop&auto=format",
  },
];

const Lists = [
  {
    Number: "00",
    Title: "Identité visuelle, charte graphique, logo",
  },
  {
    Number: "01",
    Title: "Création de site vitrine sur mesure",
  },
  {
    Number: "02",
    Title: "Direction artistique, webdesign, UX & UI",
  },
  {
    Number: "03",
    Title: "e-commerce shopify & plateforme de vente",
  },
];

export default function Projects() {
  return (
    <section className="h-[40dvh] sm:h-[100dvh] xl:h-[300dvh] 2xl:h-[200dvh]">
      <main id="right" className="sticky top-0">
        <div className="absolute top-0 bg-[#f0efeb] right-0 w-[66dvw] h-screen">
          <div className="p-10 flex flex-col justify-between gap-[2rem] w-full h-full relative">
            <h2
              id="Projects_Title"
              className="font-[Alliance] pt-10 tracking-tighter origin-top-left text-Projects"
            >
              {"Projects".split("").map((divide, index) => {
                return <span key={index}>{divide}</span>;
              })}
            </h2>
            <ul
              id="middle"
              className="flex flex-col items-end origin-top-right scale-75 relative"
            >
              {Lists.map((list, index) => {
                return (
                  <li key={`l_${index}`} className="flex p-[1rem] w-[36rem]">
                    <div className="flex h-16 justify-between w-full text-[Alliance] font-bold uppercase relative">
                      <span className="self-end pb-2">{list.Number}</span>
                      <span className="self-end w-64 text-Middle pb-2 text-right ">
                        {list.Title}
                      </span>
                      <div className="self-end bg-[#0e0e0e] h-[1px] w-full absolute" />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div
              id="footer"
              className="group flex flex-col text-Footer tracking-[-0.050rem] leading-[2.9rem] text-[Alliance] w-full h-fit antialiased"
            >
              <span className="indent-80">
                La création et l&apos;innovation sont au cœur de notre
              </span>
              <span className="w-full">
                processus, avec l&apos;envie de faire les choses différemment,
                toujours sur
              </span>
              <span className="w-full">
                mesure. Allègrement, on dit non au déjà fait, au déjà vu, au
                déjà lu.
              </span>
            </div>
          </div>
        </div>
      </main>
      <motion.div
        id="left"
        style={{ scale: 2.188 }}
        className="relative top-0 bg-[#0e0e0e] left-0 w-[34dvw] h-full origin-top-left"
      >
        {Information.map((info, index) => {
          return (
            <ul
              key={`l_${index}`}
              id={info.Title}
              style={{
                backgroundImage: `url(${info.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                z: index,
              }}
              className="group aspect-video pointer-events-auto transform-gpu cursor-pointer"
            >
              <li className="bg-[#0e0e0e] opacity-0 group-hover:opacity-40 absolute w-full h-full -z-10 duration-300 ease-in-out transition-all" />
              <li className="grid grid-cols-2 gap-4 p-4 place-content-between w-full h-full text-[Alliance] text-sm font-semibold tracking-tight text-slate-50">
                <a className="uppercase opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 duration-300 ease-in-out transition-all">
                  {info.Job}
                </a>
                <a className="text-right text-xs font-medium tracking-tighter rounded-[10rem] shadow-outline-ListYear w-fit px-2 self-center justify-self-end opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 duration-300 ease-in-out transition-all">
                  {info.Year}
                </a>
                <a className="text-3xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300 ease-in-out transition-all">
                  {info.Title}
                </a>
              </li>
            </ul>
          );
        })}
        <div
          id="left_bottom"
          className="flex justify-center items-center aspect-[16/5] bg-[#7a8e7b]"
        >
          <button
            id="group link"
            href="/projects"
            className="group rounded-[10rem] shadow-outline-AppYear px-9 py-8 flex space-between relative overflow-hidden"
          >
            <span className="text-[Alliance] text-sm font-semibold tracking-tight inline-flex pr-10 text-[#0e0e0e] group-hover:text-[#F0F0F0] transition-color duration-500 ease-in-out z-10">
              VOIR LES PROJETS
            </span>
            <span className="absolute transition-all ease-in-out duration-500 w-full h-0 group-hover:h-full bg-[#0e0e0e] origin-[50%,100%] left-0 bottom-0 group-hover:top-0" />
            <span className="rounded-full w-[10px] h-[10px] aspect-square bg-[#0e0e0e] self-center z-10" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}