let mode = document.querySelector("#modebtn");
let body = document.querySelector("body");
let boxes = document.querySelector(".box")[0]


mode.addEventListener("click", () => {
    if(mode.style.background == 'black'){
        mode.style.background = 'white'
        body.classList.add("dark-mode")
        body.classList.remove("light-mode")
        boxes.style.border = "2px solid white"
        
    } else {
        mode.style.background = 'black'
        body.classList.add("light-mode")
        boxes.style.border = "2px solid black"
    }

});