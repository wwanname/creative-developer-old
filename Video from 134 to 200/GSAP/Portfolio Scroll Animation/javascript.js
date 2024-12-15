document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 750);
  });
  gsap.ticker.lagSmoothing(0);

  //splitText
  function splitTextIntoSpans(selector) {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      const [firstDigit, secondDigit] = element.innerText;
      element.innerHTML = `
        <div class="digit-wrapper">
          <span class="first">${firstDigit}</span>
          <span class="second">${secondDigit}</span>
        </div>
      `
    })
  }

  //left Gallery
  function populateGallery() {
    const imageContainers = document.querySelectorAll(".images")
    imageContainers.forEach((container) => {
      for (let j = 0; j < imagesPerProject; j++) {
        if (imageIndex > totalImages) imageIndex = 1
        const imgContainer = document.createElement("div")
        imgContainer.classList.add("img")

        const img = document.createElement("img")
        img.src = `./photo${imageIndex}.jpg`
        img.alt = `Project Image ${imageIndex}`
        imgContainer.appendChild(img)

        container.appendChild(imgContainer)
        imageIndex++
      }
    })
  }

  splitTextIntoSpans(".mask h1")
  const imagesPerProject = 5
  const totalImages = 6
  let imageIndex = 1
  populateGallery()

  //Scroll-Bar
  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      gsap.set(".progress-bar", {
        scaleY: self.progress
      })
    }
  })

  //update preview img
  const previewImg = document.querySelector(".preview-img img")
  const imgElements = document.querySelectorAll(".img img")
  imgElements.forEach((img) => {
    ScrollTrigger.create({
      trigger: img,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => (previewImg.src = img.src),
      onEnterBack: () => (previewImg.src = img.src)
    })
  })

  //indicator
  const indicator = document.querySelector(".indicator")
  const indicatorStep = 18
  const names = gsap.utils.toArray(".name")
  gsap.set(".indicator", {
    top: "0px"
  })

  const projects = gsap.utils.toArray(".project")
  projects.forEach((project, index) => {
    ScrollTrigger.create({
      trigger: project,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        gsap.to(indicator, {
          top: index * indicatorStep + "px",
          duration: 0.3,
          ease: "power2.out"
        })
        names.forEach((name, i) => {
          name.classList.toggle("active", i === index)
        })
      },
      onLeaveBack: () => {
        gsap.to(indicator, {
          top: (index - 1) * indicatorStep + "px",
          duration: 0.3,
          ease: "power2.out"
        })
        names.forEach((name, i) => {
          name.classList.toggle("active", i === index - 1)
        })
      }
    })
  })
})