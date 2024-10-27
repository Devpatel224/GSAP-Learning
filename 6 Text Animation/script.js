function breakTheText(){
    var h1 = document.querySelector("h1")
var h1Text = h1.textContent

var splittedText = h1Text.split('')

var clutter = ''

 var halfValue = Math.floor(splittedText.length / 2)
 
 
splittedText.forEach((val,ind)=>{
    
    if(ind<halfValue){
        clutter += `<span class="a">${val}</span>`    
    }
    else{clutter += `<span class="b">${val}</span>`}
}) 

h1.innerHTML = clutter
}

breakTheText()

gsap.from('.a',{
    y:-80,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.15
})
gsap.from('.b',{
    y:80,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.15
})