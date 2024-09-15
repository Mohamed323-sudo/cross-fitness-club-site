let sideNav = document.getElementById("sideNav");
let closeIcon = document.getElementById("closeIcon");
let menuIcon = document.getElementById("menuIcon");
let menuBtn = document.getElementById("menuBtn");
let body = document.querySelector("body");

sideNav.style.left = "-200px";
menuIcon.addEventListener("click", function(){
    if(sideNav.style.left === "-200px"){
        sideNav.style.left = "0";
        menuBtn.style.left = "150px";
        body.style.overflowY = "hidden";
        
        
    }else{
        sideNav.style.left = "-200px";
        menuBtn.style.left = "-150px";
        body.style.overflowY= "scroll";
    }
})
closeIcon.addEventListener("click", function(){
    sideNav.style.left = "-200px";
    menuBtn.style.left = "-150px";
})




