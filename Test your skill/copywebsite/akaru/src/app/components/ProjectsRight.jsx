import React from "react";

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

export default function ProjectsRight() {
  return (
    <main id="right" className="fixed top-0 right-0 -z-10">
      <div className="relative top-0 bg-[#f0efeb] right-0 w-[66dvw] h-screen">
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
              mesure. Allègrement, on dit non au déjà fait, au déjà vu, au déjà
              lu.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
