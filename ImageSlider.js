let arr = ["books.PNG", "rose.PNG", "tree.PNG"]


let index = 0

let slider_slide = document.querySelector('#slider')
slider_slide.setAttribute("src", arr[index])

let nextBtn = document.querySelector('#next').addEventListener('click', () => {
    index++;
    if (index >= arr.length) {
        index = 0
    }
    document.querySelector('#slider').src = arr[index]

})
let prevBtn = document.querySelector('#prev').addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = arr.length - 1;
    }
    document.querySelector('#slider').src = arr[index]

})