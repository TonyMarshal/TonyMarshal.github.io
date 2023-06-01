let popup = document.getElementById('popup');

var typed = new Typed("#in", {
    strings: ["Abaikwam M. Anthony.","a Web Developer.","a Software Developer."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

function openPopup() {
    if(popup.className =="popup"){
        popup.className="open-popup"}else{popup.className="popup"}
}

let navMenu = document.getElementById('nav')
let menu1 = document.getElementById('menu-icon')
function togglemenu(){
    if (navMenu.className == 'menuList' ) {
        navMenu.className = "menu";
        
        
    }else{
        navMenu.className = "menuList"

    }
}
let css_link = document.getElementById('css')



icon.onclick = function() {

    if (localStorage.getItem("theme") == "index.css") {
        localStorage.setItem("theme","dark.css")
        icon.src = "image/sun.png";        localStorage.setItem('css_theme_link','dark.css')
    }else {
        localStorage.setItem("theme","index.css")
        icon.src = "image/moon.png";        localStorage.setItem('css_theme_link','dark.css')
    }
    
    css_link.href = localStorage.getItem('theme')
   
}



const change = ()=>{
    css_link.href = localStorage.getItem('theme')

}

window.onload=()=>{
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme","index.css")
    }else{
        change()
    }
}



console.log(theme_link)


