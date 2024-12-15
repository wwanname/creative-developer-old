import React, { memo } from "react";

const Navbar = [
  {
    title: "Projects",
    href: "/projects",
    color: "#d59874",
  },
  {
    title: "Expertises",
    href: "/expertises",
    color: "#788c79",
  },
  {
    title: "Agency",
    href: "/agency",
    color: "#b29ca7",
  },
  {
    title: "Contact",
    href: "/contact",
    color: "#c4ced7",
  },
];

// eslint-disable-next-line react/display-name
export default function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center content-center relative bg-[#f0efeb] w-1/2 h-screen">
      <div className="flex justify-center p-0">
        <nav
          id="Navbar"
          className="top-0 absolute mt-[2rem] z-2 pointer-events-auto w-[47dvw]"
        >
          <li className="group flex origin-center justify-between">
            {Navbar.map((nav, index) => {
              return (
                <ul key={`a_${index}`}>
                  <a
                    className={`flex items-center gap-[0.5rem]`}
                    href={nav.href}
                    title={nav.title}
                  >
                    <div
                      className={`flex justify-center items-center bg-[${nav.color}] rounded-full aspect-square w-[4rem]`}
                    >
                      <span className={` fill-white`}>
                        <svg width={19} height={19}>
                          <path d="M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z"></path>
                        </svg>
                      </span>
                    </div>
                    <span className="font-[Alliance] text-[1.2rem]">
                      {nav.title}
                    </span>
                  </a>
                </ul>
              );
            })}
          </li>
        </nav>
        <h1 id="HeroTitle" className="w-[50dvw] relative">
          <div className="flex justify-center items-center content-center gap-4 fill-[#0e0e0e]">
            <svg width={157} height={413}>
              <path d="M118.058 0.957886C139.367 0.957886 156.643 18.1954 156.643 39.455V412.147H84.1312V230.578C84.1312 224.161 78.9292 218.959 72.5121 218.959V218.959V412.147H0V39.455C0 18.1954 17.2768 0.957886 38.5849 0.957886H118.058ZM72.5121 196.104C78.9292 196.104 84.1312 190.902 84.1312 184.485V43.8388C84.1312 37.4218 78.9292 32.2197 72.5121 32.2197V32.2197V196.104V196.104Z" />
            </svg>
            <svg width={157} height={413}>
              <path
                d="M157.6,1v178.9c0,10-3.5,18.8-9.3,25.9c5.8,7.1,9.3,15.9,9.3,25.9v180.5H84.2V232.2c0-6.5-5.3-11.8-11.8-11.8l0,0v191.7
L-1,411.6V1.6h73.4V191l0,0c6.5,0,11.8-5.3,11.8-11.8V1H157.6z"
              />
            </svg>
            <svg width={157} height={413}>
              <path d="M118.058 0.957886C139.367 0.957886 156.643 18.1954 156.643 39.455V412.147H84.1312V230.578C84.1312 224.161 78.9292 218.959 72.5121 218.959V218.959V412.147H0V39.455C0 18.1954 17.2768 0.957886 38.5849 0.957886H118.058ZM72.5121 196.104C78.9292 196.104 84.1312 190.902 84.1312 184.485V43.8388C84.1312 37.4218 78.9292 32.2197 72.5121 32.2197V32.2197V196.104V196.104Z" />
            </svg>
            <svg width={157} height={413}>
              <path d="M156.651 40.1561V185.255C156.651 195.059 153.195 204.287 147.436 210.631C153.195 217.552 156.651 226.78 156.651 236.008V413.07H84.1386V237.246C84.1386 230.829 78.9365 225.627 72.5194 225.627V225.627V413.07H0.00732422V0H118.642C139.374 0 156.651 18.8164 156.651 40.1561ZM72.5194 196.213C78.9365 196.213 84.1386 191.011 84.1386 184.594V42.5473C84.1386 36.1302 78.9365 30.9281 72.5194 30.9281V30.9281V196.213V196.213Z" />
            </svg>
            <svg width={157} height={413}>
              <path d="M84.4882 0.957886H157V374.269C157 395.609 139.723 412.911 118.415 412.911H38.9419C17.6338 412.911 0.356934 395.609 0.356934 374.269V0.957886H72.8691V384.074V384.074C79.2861 384.074 84.4882 378.872 84.4882 372.455V0.957886Z" />
            </svg>
          </div>
        </h1>
        <div
          id="SubHeroTitle"
          className="flex flex-col self-end w-fit absolute z-1 translate-y-14"
        >
          <p>
            <span>
              <a className="block text-center text-nowrap">
                Nous sommes une agence web à Lyon avec un savoir‑faire de
                précision. Pour créer des sites
              </a>
              <a className="block text-center text-nowrap">
                et des designs, nous mobilisons l’audace et notre amour du
                détail qui tue.
              </a>
            </span>
          </p>
        </div>
        <footer id="Footer" className="absolute bottom-[3.2rem] w-[40.5dvw]">
          <ul className="flex justify-between pt-[1rem] w-[40dvw] pointer-events-auto">
            <ul className="flex bg-[#0e0e0e] h-[1.5px] absolute top-0 gap-[0.5rem] w-[40dvw]" />
            {["instagram", "linkedin", "twitter", "facebook"].map(
              (socail, index) => {
                return (
                  <li
                    key={index}
                    className="pb-1 uppercase relative font-[Alliance] text-[0.9rem]"
                  >
                    <a className="origin-center antialiased">{socail}</a>
                  </li>
                );
              }
            )}
          </ul>
        </footer>
      </div>
    </div>
  );
}
