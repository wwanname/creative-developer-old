/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const container = useRef()
  // useEffect(() => {
  //   const lenis = new Lenis()

  //   lenis.on('scroll', (e) => {
  //     console.log(e)
  //   })

  //   lenis.on('scroll', ScrollTrigger.update)

  //   gsap.ticker.add((time)=>{
  //     lenis.raf(time * 1000)
  //   })

  //   gsap.ticker.lagSmoothing(0)
  // }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const initialClipPaths = [
        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
        "polygon(33% 0%, 33% 0%, 33% 0%, 33% 0%)",
        "polygon(66% 0%, 66% 0%, 66% 0%, 66% 0%)",
        "polygon(0% 33%, 0% 33%, 0% 33%, 0% 33%)",
        "polygon(33% 33%, 33% 33%, 33% 33%, 33% 33%)",
        "polygon(66% 33%, 66% 33%, 66% 33%, 66% 33%)",
        "polygon(0% 66%, 0% 66%, 0% 66%, 0% 66%)",
        "polygon(33% 66%, 33% 66%, 33% 66%, 33% 66%)",
        "polygon(66% 66%, 66% 66%, 66% 66%, 66% 66%)"
      ]
      const finialClipPaths = [
        "polygon(0% 0%, 33.5% 0%, 33.5% 33%, 0% 33.5%)",
        "polygon(33% 0%, 66.5% 0%, 66.5% 33%, 33% 33.5%)",
        "polygon(66% 0%, 100% 0%, 100% 33%, 66% 33.5%)",
        "polygon(0% 33%, 33.5% 33%, 33.5% 66%, 0% 66.5%)",
        "polygon(33% 33%, 66.5% 33%, 66.5% 66%, 33% 66.5%)",
        "polygon(66% 33%, 100% 33%, 100% 66%, 66% 66.5%)",
        "polygon(0% 66%, 33.5% 66%, 33.5% 100%, 0% 100%)",
        "polygon(33% 66%, 66.5% 66%, 66.5% 100%, 33% 100%)",
        "polygon(66% 66%, 100% 66%, 100% 100%, 66% 100%)"
      ]

      const createMask = () => {
        const imgs = document.querySelectorAll(".img")
        imgs.forEach((img) => {
          if (img) {
            for (let i = 0; i < 9; i++) {
              const mask = document.createElement("div")
              mask.classList.add("mask", `m-${i}`)
              img.appendChild(mask)
            }
          }
        })
      }

      createMask()

      const rows = gsap.utils.toArray(".row")
      rows.forEach(row => {
        const imgs = row.querySelectorAll(".img")
        imgs.forEach(img => {
          const masks = img.querySelectorAll(".mask")

          masks.forEach((mask, index) => {
            gsap.set(mask, {
              clipPath: initialClipPaths[index]
            })
          })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
            }
          })

          const animationOrder = [
            [".m-1"],
            [".m-2", ".m-4"],
            [".m-3", ".m-5", ".m-7"],
            [".m-6", ".m-8"],
            [".m-9"]
          ]

          animationOrder.forEach((targets, index) => {
            const selectedTargets = targets.map((cls) => img.querySelector(cls)).filter(Boolean);
            if (selectedTargets.length) {
              tl.to(selectedTargets, {
                clipPath: (i, el) => finialClipPaths[Array.from(masks).indexOf(el)],
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.1,
              }, index * 0.125);
            } else {
              console.warn("No valid targets found:", targets);
            }
          });
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main ref={container}>
      <nav>
        <a>Cur</a>
        <a>Shop</a>
      </nav>

      <section className="hero">
          <h1>Couture</h1>
      </section>

      <section className="info">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ullam quos? Pariatur ut eius assumenda quaerat id! Modi, labore laboriosam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam esse accusantium dicta facere quisquam labore aliquam culpa consequatur ad eum, eveniet fugiat dolores?</p>
      </section>

      <section className="hero-imgs">
        <div className="row">
          <div className="img img-1"></div>
          <div className="img img-2"></div>
        </div>
      </section>

      <section className="clients">
        <div className="col"><p>Clients</p></div>
        <div className="col">
          <div className="clients-list">
            <p>Ames</p>
            <p>Billiani</p>
            <p>Botteganvoe</p>
            <p>Budri</p>
            <p>Credit</p>
            <p>CC-Tapis</p>
            <p>Group</p>
            <p>Fendi</p>
            <p>Ames</p>
            <p>Etel</p>
            <p>Brinoi</p>
            <p>Maio</p>
            <p>Kaldeweri</p>
            <p>Margeir</p>
            <p>Wonderglass</p>
          </div>
          <div className="clients-list">
            <p>Avino</p>
            <p>Roma</p>
            <p>Piana</p>
            <p>Saba</p>
            <p>Mooi</p>
            <p>Nifular</p>
            <p>Vienna</p>
            <p>Rossi</p>
            <p>Misuha</p>
            <p>Saba</p>
          </div>
        </div>
      </section>

      <section className="clients-img">
        <div className="row">
          <div className="img img-3"></div>
        </div>
      </section>

      <section className="product-filters">
        <div className="col">
          <p>All</p>
          <p>Lighting</p>
          <p>Textiles</p>
          <p>Furniture</p>
          <p>Accssories</p>
          <p>Surfaces</p>
        </div>
      </section>

      <section className="products">
        <div className="row">
          <div className="img"></div>
          <div className="img img-4"></div>
          <div className="img img-5"></div>
          <div className="img"></div>
        </div>
        <div className="row">
          <div className="img img-6"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img img-7"></div>
        </div>
        <div className="row">
          <div className="img"></div>
          <div className="img img-8"></div>
          <div className="img"></div>
          <div className="img img-9"></div>
        </div>
        <div className="row">
          <div className="img img-10"></div>
          <div className="img"></div>
          <div className="img img-11"></div>
          <div className="img img-12"></div>
        </div>
      </section>

      <section className="about">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugiat odit esse nulla sequi quasi velit. Placeat minima quidem inventore quos fugiat! Velit aliquid eum, dolorem eos blanditiis repellat obcaecati nihil earum assumenda enim incidunt magni est esse numquam quidem!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio perferendis voluptate sit nulla ducimus, voluptatibus facere fugiat atque! Adipisci deleniti nisi vitae praesentium? Laborum unde reprehenderit autem consequuntur eius?</p>
      </section>

      <section className="about-imgs">
        <div className="row">
          <div className="img img-13"></div>
          <div className="img img-14"></div>
        </div>
      </section>

      <section className="outro">
        <div className="row">
          <div className="img img-15"></div>
          <div className="img img-16"></div>
          <div className="img img-17"></div>
        </div>
      </section>

      <footer>
        <p>wwan</p>
        <p>Description</p>
      </footer>
    </main>
  );
}
