

let firstbox = document.querySelector ("#spotify")
let secondbox = document.querySelector ("#nola")
let thirdbox = document.querySelector ("#sem")

thirdbox.style.backgroundColor = "darkred";

function myfunc(){
    thirdbox.innerHTML = "red hit me";
    thirdbox.style.backgroundColor = "lightgreen";
    secondbox.innerHTML = "hondjes";
    secondbox.style.backgroundColor = "purple"

}


firstbox.addEventListener("click",myfunc);