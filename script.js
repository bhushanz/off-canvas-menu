const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const list = document.querySelector(".list-menu");

openBtn.addEventListener("click",function(e) {
    list.classList.add("active");
});
closeBtn.addEventListener("click",function(e) {
    list.classList.remove("active");
});