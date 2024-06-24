// var a = document.querySelector(".center")// seletion of an elemet----
// a.innerHTML  = "hello world" //changing HTML---
// a.style.color ="red" // changing Css alway write in camelcase---
// a.style.backgroundColor = "black"
// a.addEventListener("click",function(){
//     console.log("hello mitroo") // event listener---
// })

var a = document.querySelector(".center")
var btn = document.querySelector("button")
var flag = 0
btn.addEventListener("click",function(){
    if (flag == 0 ){
    a.style.backgroundColor= "yellow"
    console.log("lite aaegi")

    flag=1 
}else{
    a.style.backgroundColor= "white"
    console.log("lite chali gayi")

    flag=0
}

}
)