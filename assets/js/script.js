const colorMenu = document.querySelector(".offcanvas-header");
const menuBeach = document.querySelector(".beach");
const colorMenuHome = document.querySelector(".home");

menuBeach.addEventListener(
  "click",
  () => (colorMenu.style.background = "blue")
);
colorMenuHome.addEventListener(
  "click",
  () => (colorMenu.style.background = "#f5cb5c")
);



