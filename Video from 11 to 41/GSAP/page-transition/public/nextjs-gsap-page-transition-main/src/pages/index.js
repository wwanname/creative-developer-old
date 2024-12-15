import { Inter } from "next/font/google";
import Picture from '../../public/images/2.jpg'
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { TransitionContext } from '@/context/TransitionContext';
import gsap from "gsap";
import { useContext, useRef } from 'react';

export default function Home() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const image = useRef();

  useGSAP( () => {
    const targets = gsap.utils.toArray(["p", image.current])
    gsap.fromTo(targets, {y: 30, opacity: 0}, {y: 0, opacity: 1, stagger: 0.25})
    timeline.add(gsap.to(container.current, { opacity: 0 }))
  }, {scope: container})

  return (
    <div ref={container} className='h-[200vh] flex'>
      <div className="h-[100vh] flex flex-col justify-center items-center gap-5">
        <p className="text-[5vw]">Home</p>
        <p className="max-w-[50%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et mollis elit. Nulla facilisi. Phasellus ac pulvinar ante. Morbi maximus feugiat sapien nec cursus. Phasellus in ornare elit. Suspendisse viverra porta dui et efficitur. Sed ut rhoncus nibh. Cras eleifend tellus a enim sodales, a efficitur odio euismod. Aenean non consequat lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis eleifend ipsum, sit amet posuere ligula.</p>
        <p className="max-w-[50%] text-center">Sed ut rhoncus nibh. Cras eleifend tellus a enim sodales, a efficitur odio euismod. Aenean non consequat lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis eleifend ipsum, sit amet posuere ligula.</p>
        <div ref={image} className='relative w-[50%] h-[40vh]'>
          <Image 
            src={Picture}
            placeholder='blur'
            fill
            style={{objectFit: "cover"}}
          />
        </div>
      </div>
    </div>
  );
}
