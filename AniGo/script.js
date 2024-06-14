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
        start:"top -230%",
        end:"top -250%",
        scrub:3
    }
})

    tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width ="200px"
        crsr.style.height="250px"
        crsr.style.borderRadius="5px"
        crsr.style.backgroundImage=`url(${att})`
        crsr.style.mixBlendMode = "normal";
        
    })

    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width ="20px"
        crsr.style.height="20px"
        crsr.style.borderRadius="50%"
        crsr.style.backgroundImage=`none`
        crsr.style.mixBlendMode = "difference";
    })
})









var h4 =document.querySelectorAll(".nav h4")
var purple =document.querySelector(".purple")
var nav = document.querySelector(".nav")

h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display="flex"
        purple.style.opacity="1"
        nav.style.backgroundColor="transparent"
    })
  
    elem.addEventListener("mouseleave",function(){
        purple.style.display="none"
        purple.style.opacity="0"
        nav.style.backgroundColor="#0f0d0d"
    })
})




var h4 = document.querySelectorAll(".nav h4");
var purple = document.querySelector(".purple");
var marquee = document.querySelector(".textmove");
var currentText = "";  // Variable to track the current text

function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

h4.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        if (elem.innerText.toLowerCase() !== "home") {
            let text = toCamelCase(elem.innerText); // Convert to camel case
            if (currentText !== text) {
                // Fade out the current text
                gsap.to(purple, {
                    opacity: 0,
                    duration: 0.02,
                    onComplete: function() {
                        // Update the text after fading out
                        marquee.innerText = (text + ' ').repeat(40); // Repeat the text with spaces in between
                        currentText = text;
                        // Fade in the new text
                        gsap.to(purple, { opacity: 1, duration: 0.02 });
                    }
                });
            } else {
                // If the text is the same, just show the purple div
                gsap.to(purple, { opacity: 1, duration: 0.02 });
            }
        }
    });

    elem.addEventListener("mouseleave", function() {
        if (elem.innerText.toLowerCase() !== "home") {
            // Smoothly hide the purple div
            gsap.to(purple, { opacity: 0, duration: 0.05 });
        }
    });
});








