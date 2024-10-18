document.addEventListener("DOMContentLoaded",()=>{

const ul = document.querySelector("header ul")
const some = document.getElementById("something")

ul.addEventListener("mouseenter",()=>{

    ul.style.overflow = "visible"
    some.style.height = "170px"

})

some.addEventListener("mouseout",()=>{

    some.style.height = 0
    ul.style.overflow = "hidden"


})

let i = 2;
const img = document.querySelectorAll("section div img")

const fade = () =>{
    if(i != 0) {
        img[i].style.opacity = 0;
        img[i].style.transition = "all 1s"
        i--
    } else if(i ===0){
        img[2].style.opacity = 1;
        img[1].style.opacity = 1;
        i = 2;

    }

}

setInterval(fade, 1500)


const li = document.querySelectorAll("#notice ul li")
const popup = document.getElementById("popup")
const btn = document.querySelector("#popup div button")


li.forEach( i => {
    i.addEventListener("click",() =>{
        popup.style.display = "flex"

    })
})

btn.addEventListener("click", ()=>{
    popup.style.display = "none"

})


})//end of script