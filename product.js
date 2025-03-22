var menubar=document.getElementById("menubar")
var sidebar=document.getElementById("sidebar")
var cancel=document.getElementById("cancel")

menubar.addEventListener("click",function(){
    sidebar.style.right="0"
})

cancel.addEventListener("click",function(){
    sidebar.style.right="-50%"
})

var searchbox=document.getElementById("searchbox")
var products=document.querySelectorAll(".m-2")

searchbox.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    
    for(i=0;i<products.length;i++){
        var h1list=products[i].querySelector("h1").textContent.toUpperCase()
        if(h1list.indexOf(enteredvalue)<0){
            products[i].style.display="none"
        }
        else{
            products[i].style.display="block"
        }
    }
})