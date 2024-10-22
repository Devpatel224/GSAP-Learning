
// Basic GSAP
// gsap.to('#box1',{
//     x:1000,
//     duration:2,
//     delay:1,
//     borderRadius:"50%",    
//     backgroundColor:"blue",
//     rotate:360,
// })

// gsap.from("#box2",{
//     y:500,
//     x:550,
//     duration:2,
//     delay:1
// })


// MUltiple Stagger
gsap.from("h1",{
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:0.5
})

// repeat , yoyo 

// gsap.to("#box2",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:-1,
//     yoyo:true
// })



// TimeLine 

// Aam Jindagi mai eshe karate hai calculate delay to animate element one by one

// gsap.to("#box1",{
//     x:1200,
//     rotate:360,
//     delay:1,
//     duration:1.5
// })

// gsap.to("#box2",{
//     x:1200,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5   
// })
// gsap.to("#box3",{
//     x:1200,
//     scale:0.5,
//     y:-450,
//     duration:1.5,
//     rotate:360,
//     borderRadius:"50%",
//     backgroundColor:"rgb(7, 168, 17)",
//     delay:4
// })


// Ab Hum Mentos Jindagi baat kare ge

var tl = gsap.timeline()

tl.to("#box1",{
    x:1200,
    rotate:360,
    delay:1,
    duration:1.5
})

tl.to("#box2",{
        x:1200,
        backgroundColor:"yellow",
        duration:1.5          
})

tl.to("#box3",{
    x:1200,
    scale:0.5,
    y:-450,
    duration:1.5,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"rgb(7, 168, 17)",   
})

var navtl = gsap.timeline()
navtl.from("h2",{
    y:-20,
    opacity:0,
    duration:0.6,
    duration:0.5
})
navtl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    duration:0.5,
    stagger:0.3
})