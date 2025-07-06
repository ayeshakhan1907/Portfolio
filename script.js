// project1
const div = document.querySelector('#mydiv')
const para = document.createElement('p')
para.textContent ="hello!!";
div.appendChild(para);
console.log(div)
document.body.appendChild(div)

//project2

const input = document.querySelector('#inp').addEventListener('click',()=>{
    const color = document.querySelector('#inp').value;
   document.body.style.backgroundColor=color;
})


