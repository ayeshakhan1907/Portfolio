//project3
const clock = setInterval(()=>
{
const currentDate = new Date();
let hrs = parseInt(currentDate.getHours());
let hours = hrs%12;
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let datee = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();
const time = `${hours}:${minutes}:${seconds}`
const date = `${datee}/${month}/${year}`
document.querySelector('#clock').textContent=time;
document.querySelector('#date').textContent=date;
},1000)
