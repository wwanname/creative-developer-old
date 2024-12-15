const Title = useRef([]);
Title.current = [];
const myTexts = useRef([]);
myTexts.current = [];
const pages = useRef([]);

useLayoutEffect(() => {
  Title.current.forEach((char, i) => {
    char.setAttribute("data-index", i);
    gsap.fromTo(
      char,
      { y: "100%" },
      {
        y: 0,
        duration: 1,
        delay: 0.09 * i,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.078,0.818 0.291,0.924 0.444,1 0.818,1.001 1,1"
        ),
        scrollTrigger: {
          trigger: pages,
          start: "top 10%",
          end: "end 10%",
          markers: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // const boxes = gsap.utils.toArray(".box");
  // boxes.forEach((box) => {
  //   gsap.fromTo(
  //     box,
  //     {
  //       y: "100%",
  //     },
  //     {
  //       y: 0,
  //       duration: 1,
  //       delay: 0.09,
  //       scrollTrigger: {
  //         trigger: box,
  //         start: "top 40%",
  //         end: "top 60%",
  //         scrub: true,
  //         markers: true,
  //       },
  //     }
  //   );
  // });

  myTexts.current.forEach((text, i) => {
    text.setAttribute("data-index", i);
    gsap.fromTo(
      text,
      { y: "100%" },
      {
        y: 0,
        duration: 1,
        delay: 1,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.161,0.8 0.343,0.873 0.579,0.967 0.818,1.001 1,1 "
        ),
        scrollTrigger: {
          trigger: pages,
          start: "top 40%",
          end: "top 60%",
          markers: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}, []);

// useLayoutEffect(() => {
//   const sections = gsap.utils.toArray(pages.current);

//   const scrollTween = gsap.to(pages.current, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: targetRef.current,
//       pin: false,
//       scrub: 0.1,
//       end: "+=100",
//     },
//   });

//   Title.current.forEach((char, i) => {
//     gsap.fromTo(
//       char,
//       { y: "100%" },
//       {
//         y: 0,
//         duration: 1,
//         delay: 0.04 * i,
//         ease: CustomEase.create(
//           "custom",
//           "M0,0 C0.126,0.382 0.078,0.818 0.291,0.924 0.444,1 0.818,1.001 1,1"
//         ),
//         scrollTrigger: {
//           trigger: char,
//           start: "left left+=1500",
//           end: "right 20%",
//           markers: true,
//           // horizontal: true,
//           pinSpacing: false,
//           containerAnimation: scrollTween,
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   });

//   myTexts.current.forEach((text, i) => {
//     text.setAttribute("data-index", i);
//     gsap.fromTo(
//       text,
//       { y: "100%" },
//       {
//         y: 0,
//         duration: 1,
//         delay: 0.08,
//         ease: CustomEase.create(
//           "custom",
//           "M0,0 C0.126,0.382 0.161,0.8 0.343,0.873 0.579,0.967 0.818,1.001 1,1 "
//         ),
//         scrollTrigger: {
//           trigger: text,
//           start: "left left+=1500",
//           end: "right 20%",
//           markers: false,
//           // horizontal: true,
//           pinSpacing: false,
//           containerAnimation: scrollTween,
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   });
// }, []);

<div
  style={{ scale: "220.48%", transformOrigin: "top left" }}
  className="relative origin-top-left -translate-y-36"
>
  <Projects />
  <motion.div
    style={{ scale: 1, transformOrigin: "bottom left" }}
    className="block origin-bottom"
  >
    <div className="overflow-hidden w-full h-full">
      <ProjectsLeft />
    </div>
  </motion.div>
</div>;
