document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
        "hop",
        "M0,0 C0.488,0.02 0.467,0.286 0.5,0.5 0.532,0.712 0.58,1 1,1"
    );

    const slider = document.querySelector(".slider");
    const sliderTitle = document.querySelector(".slider-title");
    const sliderCounter = document.querySelector(".slider-counter p span:first-child");
    const sliderItems = document.querySelector(".slider-items");
    const sliderPreview = document.querySelector(".slider-preview");
    const totalSlides = 7;
    let activeSlideindex = 1;
    let isAnimating = false;

    const sliderContent = [
        { name: "Serene Space", img: "./images/10.jpg" },
        { name: "Gentle Horizon", img: "./images/11.jpg" },
        { name: "Quiet Flow", img: "./images/12.jpg" },
        { name: "Eternal Light", img: "./images/13.jpg" },
        { name: "Calm Drift", img: "./images/14.jpg" },
        { name: "Subtle Balance", img: "./images/15.jpg" },
        { name: "Soft Whisper", img: "./images/16.jpg" },
    ];

    const clipPath = {
        closed: "polygon(25% 30%, 75% 30%, 75% 70%, 25% 70%)",
        open: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    };

    const sliderPositions = {
        prev: { left: "15%", rotation: -90 },
        active: { left: "50%", rotation: 0 },
        next: { left: "85%", rotation: 90 }
    };

    function splitTextIntoSpans(element) {
        element.innerHTML = element.innerText
            .split("")
            .map(char => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
            .join("");
    }

    function createAndAnimateTitle(content, direction) {
        const newTitle = document.createElement("h1");
        newTitle.innerText = content.name;
        sliderTitle.appendChild(newTitle);
        splitTextIntoSpans(newTitle);

        const yOffset = direction === "next" ? 60 : -60;
        gsap.set(newTitle.querySelectorAll("span"), { y: yOffset });
        gsap.to(newTitle.querySelectorAll("span"), { y: 0, duration: 1.24, stagger: 0.02, ease: "hop", delay: 0.24 });

        const currentTitle = sliderTitle.querySelector("h1");
        if (currentTitle) {
            gsap.to(currentTitle.querySelectorAll("span"), {
                y: -yOffset, duration: 1.24, stagger: 0.02, ease: "hop", delay: 0.24,
                onComplete: () => { currentTitle.remove(); }
            });
        }
    }

    function createSlide(content, className) {
        const slide = document.createElement("div");
        slide.className = `slider-container ${className}`;
        slide.innerHTML = `<div class="slide-img"><img src="${content.img}" alt="${content.name}" /></div>`;
        return slide;
    }

    function getSlideIndex(increment) {
        return ((activeSlideindex + increment - 1 + totalSlides) % totalSlides) + 1;
    }

    function updateCounterAndHighlight(index) {
        sliderCounter.textContent = index;
        sliderItems.querySelectorAll("p").forEach((item, i) => {
            item.classList.toggle("activeItem", i === index - 1);
        });
    }

    function updatePreviewImage(content) {
        const newImage = document.createElement("img");
        newImage.src = content.img;
        newImage.alt = content.name;
        sliderPreview.appendChild(newImage);
        gsap.fromTo(newImage, { opacity: 0 }, {
            opacity: 1, duration: 1, ease: "power2.inOut", delay: 0.5,
            onComplete: () => { sliderPreview.querySelector("img").remove(); }
        });
    }

    function animateSlide(slide, props) {
        gsap.to(slide, { ...props, duration: 2, ease: "hop" });
        gsap.to(slide.querySelector(".slide-img"), { rotation: -props.rotation, duration: 2, ease: "hop" });
    }

    function transitionSlides(direction) {
        if (isAnimating) return;
        isAnimating = true;

        const [outgoingPos, incomingPos] = direction === "next" ? ["prev", "next"] : ["next", "prev"];
        const outgoingSlide = slider.querySelector(`.${outgoingPos}`);
        const activeSlide = slider.querySelector('.active');
        const incomingSlide = slider.querySelector(`.${incomingPos}`);

        animateSlide(incomingSlide, {
            ...sliderPositions,
            clipPath: clipPath.open
        });
        animateSlide(activeSlide, {
            ...sliderPositions[outgoingPos],
            clipPath: clipPath.closed,
        });
        gsap.to(outgoingSlide, { scale: 0, opacity: 0, duration: 2, ease: "hop" });

        const newSlideIndex = getSlideIndex(direction === "next" ? 1 : -1);
        const newSlide = createSlide(sliderContent[newSlideIndex - 1], incomingPos);
        slider.appendChild(newSlide);
        gsap.set(newSlide, {
            ...sliderPositions[incomingPos],
            xPercent: -50,
            yPercent: -50,
            scale: 0,
            opacity: 0,
            clipPath: clipPath.closed
        });
        gsap.to(newSlide, { scale: 1, opacity: 1, duration: 2, ease: "hop" });

        const newActiveIndex = getSlideIndex(direction === "next" ? 1 : -1);
        createAndAnimateTitle(sliderContent[newActiveIndex - 1], direction);
        updatePreviewImage(sliderContent[newActiveIndex - 1]);

        setTimeout(() => updateCounterAndHighlight(newActiveIndex), 1000);
        setTimeout(() => {
            outgoingSlide.remove();
            activeSlide.className = `slider-container ${outgoingPos}`;
            incomingSlide.className = "slider-container active";
            newSlide.className = `slider-container ${incomingPos}`;
            activeSlideindex = newActiveIndex;
            isAnimating = false;
        }, 2000);
    }

    slider.addEventListener("click", (e) => {
        const clickedSlide = e.target.closest(".slider-container");
        if (clickedSlide && !isAnimating) {
            transitionSlides(
                clickedSlide.classList.contains("next") ? "next" : "prev"
            );
        }
    });

    // Object.entries(sliderPositions).forEach(([key, value]) => {
    //     gsap.set(`.slider-container.${key}`, {
    //         ...value,
    //         xPercent: -50,
    //         yPercent: -50,
    //         clipPath: key === "active" ? clipPath.open : clipPath.closed
    //     });
    //     if (key !== "active") {
    //         gsap.set(`.slider-container.${key} .slide-img`, {
    //             rotation: -value.rotation
    //         });
    //     }
    // });

    const initialTile = sliderTitle.querySelector("h1");
    splitTextIntoSpans(initialTile);
    gsap.fromTo(initialTile.querySelectorAll("span"), { y: 60 }, { y: 0, duration: 1, stagger: 0.02, ease: "hop" });
    updateCounterAndHighlight(activeSlideindex);

    sliderItems.querySelectorAll("p").forEach((item, index) => {
        item.addEventListener("click", () => {
            if (index + 1 !== activeSlideindex && !isAnimating) {
                transitionSlides(index + 1 > activeSlideindex ? "next" : "prev");
            }
        });
    });
});
