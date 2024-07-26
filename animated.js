let tl = gsap.timeline()
tl.from("#nav h1 , #nav h3,#nav button",{
    opacity:0,
    y:30,
    duratin:1,
    delay:0.5,
    stagger:0.3
})
tl.from(".section2 h1,.section2 p,.section2 button",{
    opacity:0,
    x:30,
    duration:1.5,
    delay:0.3,
    stagger:0.3
})
tl.from("#part2 img",{
    opacity:0,
    x:30,
    duration:1,
    
})
tl.from(".section3 img",{
    opacity:0,
    x:20,
    duration:1,
    delay:0.2,
    stagger:0.3
})
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".container",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 5%",
        scrub:2
    }
})
tl2.from(".services h2",{
    opacity:0,
    y:30,
    duration:1,
    stagger:0.3
})

tl2.from(".box1",{
    opacity:0,
    x:-300,
    duration:1,
    delay:2
},"same")

tl2.from(".box2",{
    opacity:0,
    x:300,
    duration:1,
    delay:2
},"same")

tl2.from(".box3",{
    opacity:0,
    x:-300,
    duration:1,
    delay:2,
},"name")

tl2.from(".box4",{
    opacity:0,
    duration:1,
    delay:2,
    x:300
},"name")

tl2.from(".firstSide",{
    opacity:0,
    x:300,
    duration:1,
    delay:3,
})

tl2.from(".footer a,.footer img",{
    opacity:0,
    x:300,
    duration:1,
    delay:3,
})


 