//percentage(preview)*minimap

document.addEventListener("DOMContentLoaded",function(){
    const imagesContainer=document.querySelector(".images")
    const preview=document.querySelector(".preview")
    const minimap=document.querySelector(".minimap")
    function getElementTop(element){
        let top=0
        while(element){
            top+=element.offsetTop //the gap of the first image to top window
            element=element.offsetParent //caculate the exactly position
        }
        return top
    }
    const imagesStart=getElementTop(imagesContainer)
    const imagesEnd=imagesContainer.offsetHeight
    const viewportHeight=window.innerHeight
    const previewMaxTranslate=(minimap.offsetHeight-preview.offsetHeight)*2.84

    function handleScroll(){
        const scrollPosition=window.scrollY
        const scrollRange=imagesEnd-imagesStart
        if(scrollPosition>=imagesStart&&scrollPosition<=imagesEnd-viewportHeight){
            let scrollFraction=(scrollPosition)/scrollRange
            let previewTranslateY=scrollFraction*previewMaxTranslate
            preview.style.transform=`translateX(-50%) translateY(${previewTranslateY}px)`
        }else if(scrollPosition<imagesStart){
            preview.style.transform = "translateX(-50%) translateY(0%)"
        }else{preview.style.transform = `translateX(-50%) translateY(${previewMaxTranslate}px)`}}
    window.addEventListener("scroll",handleScroll)
    const togglePoint=viewportHeight*4
    const wrapper=document.querySelector(".wrapper")
    function checkScroll(){if(window.scrollY>=togglePoint){wrapper.classList.add("light-theme")}else{wrapper.classList.remove("light-theme")}} window.addEventListener("scroll", checkScroll)
})