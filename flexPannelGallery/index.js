
 
let panel = document.querySelectorAll(".panel");

panel.forEach(el => {
    el.addEventListener("click", ()=>{
        el.classList.toggle("open");
    })
})