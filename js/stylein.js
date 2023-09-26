const sections = document.querySelectorAll("section")

for(const section of sections){
    section.style.border = " 2px solid black"
    section.style.marginBottom = "10px"
    section.style.borderRadius = '15px'
    section.style.padding = "10px"
}

const places = document.getElementById("places-container")

places.classList.add("yellow-bg")
places.classList.add("text-center")
places.classList.add('text-large')
places.classList.remove('text-large')
// places.classList.remove("text-center")

const placesUl = document.querySelector("#places-container ul")
// placesUl.childNodes
const li = document.createElement("li")
li.innerText = "I have to Visit"

placesUl.appendChild(li)