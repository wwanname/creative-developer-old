import { translate } from './anim';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <div className="flex items-end justify-between w-auto flex-wrap text-sm uppercase mt-10">
            <ul className='w-1/2 mt-3 overflow-hidden list-none p-0 text-black'>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="open"
                    exit="close">
                    <span className='text-[#9f9689]'>Made by:</span>Studio Lumio
                </motion.li>
            </ul>
            <ul className='w-1/2 mt-3 overflow-hidden list-none p-0'>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="open"
                    exit="close">
                    <span className='text-[#9f9689]'>Typography:</span> Google Fonts
                </motion.li>
            </ul>
            <ul className='w-1/2 mt-3 overflow-hidden list-none p-0'>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="open"
                    exit="close">
                    <span className='text-[#9f9689]'>Images:</span> Freepik, Envato
                </motion.li>
            </ul>
            <ul className='w-1/2 mt-3 overflow-hidden list-none p-0'>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="open"
                    exit="close">
                    Privacy Policy
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="open"
                    exit="close">
                    Terms & Conditions
                </motion.li>
            </ul>
        </div>
    )
}