"use client";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="">
      <div className="h-[100vh]"> </div>
      <Footer />
    </main>
  );
}
