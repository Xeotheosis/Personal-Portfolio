var icon = document.getElementById("icon");

icon.addEventListener("click", function toggleStylesheet() {
  var stylesheet = document.getElementById("dark");
  if (stylesheet.getAttribute("href") === "dark.css") {
    stylesheet.setAttribute("href", "light.css");
  } else {
    stylesheet.setAttribute("href", "dark.css");
  }
});

icon.addEventListener("click", function toggleIcon() {
  var icon = document.getElementById("icon");
  if (icon.getAttribute("class") === "fa-solid fa-sun fa-3x") {
    icon.setAttribute("class", "fa-solid fa-moon fa-3x");
  } else {
    icon.setAttribute("class", "fa-solid fa-sun fa-3x");
  }
});

icon.addEventListener("click", function toggleIcon() {
    var icon = document.getElementById("icon");
    if (icon.getAttribute("style") === "color: #ffffff;") {
      icon.setAttribute("style", "color: #000000;");
    } else {
      icon.setAttribute("style", "color: #ffffff;");
    }
  });
  
  var website1 = document.getElementById("live2");

  website1.addEventListener("click", function redirect(){
    window.open("https://xeotheosis.github.io/Frontend-Challenge-3/", "_blank");
  });

  

  var menu = document.querySelector("#menu__icon");
  var bar = document.querySelector("#mobile__menu");
  var ecs = document.querySelector("#ECS");
  
  menu.addEventListener('click',()=>{
   bar.classList.add('show');
  });
  
  ecs.addEventListener('click', ()=>{
    bar.classList.remove('show');
  });
  
  var list = document.getElementsByClassName("mobile__item");
  
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', ()=> {
      bar.classList.remove('show');
    });
  }
  
