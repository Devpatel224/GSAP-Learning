var main = document.querySelector("#main")
var cursor =  document.querySelector("#cursor")
var imgDiv = document.querySelector("#image")

main.addEventListener("mousemove",(dets) => {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"power2.out"
    })    
})

imgDiv.addEventListener("mouseenter",(dets) => {
    cursor.innerHTML = "View more"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"rgba(255, 255, 255, 0.300)"
    })       
})
imgDiv.addEventListener("mouseleave",(dets) => {
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })       
})

