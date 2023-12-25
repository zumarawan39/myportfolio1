let navbar = document.getElementById('nav_links');

function showMenu() {
    nav_links.style.right = "0";
}

function hideMenu() {
    nav_links.style.right = "-50%";
}

window.onscroll = function () {
    let dot = document.getElementById("dot");
    let menu = document.getElementById("menu");
    let navbar = document.getElementById("header");
    if (window.pageYOffset >= 40) {
      dot.style.color = "#ffffff"
      navbar.style.backgroundColor = "#04AA6D";
      menu.style.backgroundColor = "#ffffff";
      menu.style.height = "100%";
      menu.style.marginTop = "3px";

    } else {
      dot.style.color = ""
      menu.style.backgroundColor = ""
      menu.style.height = "";
      menu.style.marginTop = "";
      navbar.style.backgroundColor = "";
    }
  };
