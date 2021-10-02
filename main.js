var target = document.querySelector(".card-per-game");

target.addEventListener("mouseover", mOver, false);
target.addEventListener("mouseout", mOut, false);

function mOver() {  
    target.setAttribute("style", "transition: all 0.5s ease-in-out; transform: scale(1.05);")
 }

 function mOut() {  
    target.setAttribute("style", "transition: all 0.5s ease-in-out;")
 };

 