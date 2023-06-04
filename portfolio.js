let navMenu = document.getElementById('nav')
        let menu1 = document.getElementById('menu-icon')
        function togglemenu(){
    if (navMenu.className == 'menuList' ) {
        navMenu.className = "menu";
        
        
    }else{
        navMenu.className = "menuList"

    }
}

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

/*let css_link = document.getElementById('css')

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

change()*/

