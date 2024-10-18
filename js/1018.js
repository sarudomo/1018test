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