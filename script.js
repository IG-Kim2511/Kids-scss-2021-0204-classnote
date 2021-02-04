
// js 111 click menu btn and show the menu
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("change");    //js 113 menu btn change
  document.querySelector(".navbar").classList.toggle("change");
});


// js 045, learn more btn click, and the circle expand and show guide
// array.forEach((i)=>{})  : i 파라미터는 array안 하나하나의 데이터

document.querySelectorAll(".card-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("change");
  });
});
