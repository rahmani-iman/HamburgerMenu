const hamburgerMenu = document.querySelector(".hamburger_menu");
const bars = document.querySelectorAll(".bar");
hamburgerMenu.addEventListener("click", () => {
    bars.forEach(bar => {
        bar.classList.toggle("expanded")
        console.log(bar.classList)
    })
});