window.addEventListener("wheel",(dets)=>{
    if(dets.deltaY > 0){
        gsap.to(".marque",{
            transform:'translate(-100%)',
            duration:4,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".marque img",{
            rotate:180
        })
    }
    else{
        gsap.to(".marque",{
            transform:'translate(00%)',
            duration:4,
            repeat:-1,
            ease:"none"
        })   
        gsap.to(".marque img",{
            rotate:0
        })     
    }            
})


