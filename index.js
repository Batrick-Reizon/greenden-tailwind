var menubar=document.getElementById("menubar")
var sidebar=document.getElementById("sidebar")
var cancel=document.getElementById("cancel")

menubar.addEventListener("click",function(){
    sidebar.style.right="0"
})

cancel.addEventListener("click",function(){
    sidebar.style.right="-50%"
})