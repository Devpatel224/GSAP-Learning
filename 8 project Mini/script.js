function page1Animation(){
    var tl = gsap.timeline()


tl.from('nav h1 ,nav h4 , nav button',{
    y:-15,
    opacity:0,
    delay:1,
    duration:0.7,
    stagger:0.15
})  

tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    // delay:1.2,
    duration:0.7
},"-=0.2")
tl.from(".center-part1 p",{
    x:-100,
    // delay:1,
    opacity:0,
    duration:0.5
})

tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5
},'-=0.2')

tl.from(".images img",{
    opacity:0,
    y:30,
    duration:0.6,
    stagger:0.15
})
}

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,   
        start:"top 50%",
        end:'top -50%',
        scrub:2 
        // pin:true  
    }
})

tl2.from(".services",{
    y:30,   
    opacity:0, 
    duration:0.5   
})

tl2.from(".elem.line1.left",{
   x:-300,
   opacity:0,
   duration:1
},"anim")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"anim")
 
tl2.from(".elem.line2.left",{
   x:-300,
   opacity:0,
   duration:1
},"anim2")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"anim2")