'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useState } from 'react'

const Hero = () => {

  const [ videoSrc, setVideoSrc ] = useState(window.innerWidth < 760 ? "/assets/videos/smallHero.mp4" : "/assets/videos/hero.mp4")
  // "useState" được sử dụng để tạo và quản lý "state videoSrc".

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc("/assets/videos/smallHero.mp4")
    } else
      setVideoSrc("/assets/videos/hero.mp4")
  }

  useEffect(() => {
  // "useEffect" được sử dụng để thực hiện một số tác vụ phụ (side effects) sau khi component đã được render.
    window.addEventListener('resize', handleVideoSrcSet);
  // Trong useEffect, bạn thêm một trình lắng nghe sự kiện "resize" vào đối tượng window.
  // Trình lắng nghe này sẽ gọi "handleVideoSrcSet" mỗi khi cửa sổ trình duyệt được thay đổi kích thước.

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  // đảm bảo rằng trình lắng nghe sự kiện sẽ được gỡ bỏ khi component bị hủy 
  // hoặc khi hiệu ứng này bị thay thế, ngăn ngừa rò rỉ bộ nhớ và lỗi không mong muốn.
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className='text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10'>iPhone 15 Pro</p>
      <div className='md:w-10/12 w-9/12'>
        <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      </div>

      <div
        id="cta"
        className='flex flex-col items-center opacity-0 translate-y-20'
        >
          <a href="#hightlights" className='px-5 py-2 rounded-3xl bg-blue my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue'>Buy</a>
          <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero