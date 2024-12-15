document.addEventListener("DOMContentLoaded", function()
    //multiplie counter-3 2 times
    {
    const counter1=document.querySelector(".counter-1")
    const counter2=document.querySelector(".counter-2")
    const counter3=document.querySelector(".counter-3")
    for(let i=0;i<2;i++){
    for(let j=0;j<10;j++){
        const div=document.createElement("div")
        div.className="num"
        div.textContent=j
        counter3.appendChild(div)
    }}
    const finalDiv = document.createElement("div")
    finalDiv.className="num"
    finalDiv.textContent="0"
    counter3.appendChild(finalDiv)
    // animation-counter
    function animate(counter,duration,delay=0){
        const numHeight=counter.querySelector(".num").clientHeight
        const totalDistance=(counter.querySelectorAll(".num").length-1)*numHeight
                            //  percentage * pixel
        gsap.to(counter,{
            y:-totalDistance,
            duration:duration,
            delay:delay,
            ease:"power2.inOut"
        })
    }
    animate(counter1,2,3)
    animate(counter2,5)
    animate(counter3,5)
    }
)
//rest
gsap.to(".digit",{top:"-150px",stagger:{amount:0.24},delay:5,duration:1,ease:"power4.inOut"})
gsap.from(".loader-1",{width:0,duration:5,ease:"power2.inOut"})
gsap.from(".loader-2",{width:0,delay:1.9,duration:2,ease:"power2.inOut"})
gsap.to(".loader",{background:"none",delay:5,duration:0.1})
gsap.to(".loader-1",{rotate:90,y:-50,duration:0.5,delay:5})
gsap.to(".loader-2",{x:-75,y:75,duration:0.5},"<")
gsap.to(".loader",{scale:40,duration:1,delay:8,ease:"power2.inOut"})
gsap.to(".loader",{rotate:45,y:500,x:2000,duration:1,delay:8,ease:"power2.inOut"})
gsap.to(".loading-screen",{opacity:0,duration:0.5,delay:8.5,ease:"power1.inOut"})
gsap.to("h1",1.5,{delay:8,y:-80,ease:"power4.inOut",stagger:{amount:0.1}})