let burger  = document.querySelector(".hamburger");
let menu = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
    console.log("n")
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        console.log("n")
    } else {
        menu.classList.add('hidden');
        console.log("n")
    }
});
