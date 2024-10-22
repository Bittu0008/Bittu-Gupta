function init(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}
init()



gsap.from(".home .left h1",{
    x:-100,
    opacity:0,
    ease:"power 3",
    delay:.2,
    duration:1,
    
},"chacha")

gsap.from(".home .left p",{
    x:-100,
    opacity:0,
    ease:"power3",
    delay:1.1,
    duration:1,
})

gsap.from(".right img",{
    x:100,
    opacity:0,
    delay:.2,
    ease:"power3",
    duration:1,
},"chacha")

gsap.from(".home .c .circle",{
    y:200,
    opacity:0,
    duration:1,
    ease:"power3",
})


var tl = gsap.timeline({
    
    scrollTrigger:{
        trigger:".home .c .circle",
        scroller:".wrapper",
        markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }
})

tl.to(".circle",{
    y:"-20%",
    scrub:1,
})

var tl2 = gsap.timeline({
    
    scrollTrigger:{
        trigger:".page-2",
        scroller:".wrapper",
        // markers:true,
        start:"top 80%",
        end:"top 0%",
        scrub:3,
    }
})

tl2.to(".page-2",{
    backgroundColor:"white",
})



