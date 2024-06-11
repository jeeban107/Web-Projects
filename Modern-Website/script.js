function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
   crsr.style.left= dets.x + 5+"px"
   crsr.style.top = dets.y + 5+"px"
})


gsap.from(".page1 h1, .page1 h2",{
    y:10,
    rotate:10,
    opacity:0,
    delay:0.3,
    duration:0.7
})

var tl =gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 27%",
        end:"top 0%",
        scrub:3
    }
})
tl.to(".page1  h1",{
    x:-90,
},"jb")

tl.to(".page1 h2",{
    x:90
},"jb")

tl.to(".page1 video",{
    width:"90%"
},"jb")

var tl2 =gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -115%",
        end:"top -120%",
        scrub:3
    }
})

tl2.to(".main",{
    backgroundColor:"#fff"

})




var tl3 =gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -330%",
        end:"top -350%",
        scrub:3
    }
})

    tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})