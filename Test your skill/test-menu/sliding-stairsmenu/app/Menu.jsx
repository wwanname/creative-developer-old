import { motion } from "framer-motion"
import { mountAnim, slideLeft, opacity } from "./anim"
import Link from "./Link"

const menu = [
    {
      title: "Projects",
      description: "To See Everything",
      images: ['projects1.jpg', 'projects2.jpg']
    },
    {
      title: "Agence",
      description: "To Learn Everything",
      images: ['agence1.jpg', 'agence2.jpg']
    },
    {
      title: "Contact",
      description: "To Send a FAX",
      images: ['contact1.jpg', 'contact2.jpg']
    }
  ]

export default function Menu({closeMenu}) {
    return (
        <div className="fixed flex z-3 w-full h-full flex-col justify-between z-50">
            <div className="flex justify-end p-5">
                <motion.svg
                    variants={slideLeft}
                    {...mountAnim}
                    onClick={() => {closeMenu()}}
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer size-28 group"
                    >
                      <path d="M1.5 1.5L67 67" stroke="white" className="transition-colors duration-100 group-hover:stroke-[#D3FD05]"/>
                      <path d="M66.5 1L0.999997 66.5" stroke="white" className="transition-colors duration-100 group-hover:stroke-[#D3FD05]"/>
                </motion.svg>
            </div>
            <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
                {
                    menu.map((el, index) => {
                        return <Link data={el} index={index} key={index} />
                    })
                }
            </div>
            <motion.div
                variants={opacity}
                {...mountAnim}
                custom={0.5}
                className="text-white flex justify-center gap-3 p-5 z-10"
            >
                <a className="text-[3vw] border-solid border-white rounded-3xl cursor-pointer border-2 px-3">FB</a>
                <a className="text-[3vw] border-solid border-white rounded-3xl cursor-pointer border-2 px-3">IG</a>
                <a className="text-[3vw] border-solid border-white rounded-3xl cursor-pointer border-2 px-3">IN</a>
                <a className="text-[3vw] border-solid border-white rounded-3xl cursor-pointer border-2 px-3">BE</a>
            </motion.div>
        </div>
    )
  }