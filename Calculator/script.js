let string = "";

let buttons = document.querySelectorAll(".one");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (ev) => {
    if(ev.target.innerHTML == "="){
        string = eval(string);
        document.querySelector('input').value = string
    } else if 
    (ev.target.innerHTML == "C"){
            string = "";
            document.querySelector('input').value = string
}else {
    console.log(ev.target);
    string = string + ev.target.innerHTML;
    document.querySelector('input').value = string
}
  })
})