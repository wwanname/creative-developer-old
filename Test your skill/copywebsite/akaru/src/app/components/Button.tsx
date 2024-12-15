import React from "react";

export const Button = () => {
  return (
    <a
      id="ouline"
      href="/projects"
      className="group rounded-[10rem] shadow-outline-AppYear px-9 py-8 flex space-between relative overflow-hidden"
    >
      <span
        id="text"
        className="text-[Alliance] text-xs font-semibold tracking-tight inline-flex pr-10 text-[#0e0e0e] group-hover:text-[#F0F0F0] transition-color duration-500 ease-in-out z-10"
      >
        VOIR LES PROJETS
      </span>
      <span
        id="animate button"
        className="absolute transition-all ease-in-out duration-500 w-full h-0 group-hover:h-full bg-[#0e0e0e] origin-[50%,100%] left-0 bottom-0 group-hover:top-0"
      />
      <span
        id="circle"
        className="rounded-full w-[10px] h-[10px] aspect-square bg-[#0e0e0e] self-center z-10"
      />
    </a>
  );
};
