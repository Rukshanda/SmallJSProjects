

let selectImg = document.querySelectorAll(".item");


selectImg.forEach(e => {
    e.addEventListener('click' , function(){
        removeActiveClass();
        e.classList.add("active");
       
    })
})

function removeActiveClass(){
    selectImg.forEach(el => {
        el.classList.remove("active");
    })
}
