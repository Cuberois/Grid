var a = document.querySelector(".center")// seletion of an elemet----
a.innerHTML  = "hello world" //changing HTML---
a.style.color ="red" // changing Css alway write in camelcase---
a.style.backgroundColor = "black"
a.addEventListener("click",function(){
    console.log("hello mitroo") // event listener---
})