const captas = ['Abx2S', 'Kzn8q', 'L5wmo', 'Opv7l', 'Rxc3i']
const capta = captas[Math.floor(Math.random() * 5)]
document.querySelector('#gcapta').textContent = capta


const submit = document.querySelector('#submit').addEventListener('click', () => {
  const enterCapta = document.querySelector('#capta').value
  
  const pwd = document.querySelector('#pwd').value
  const cpwd = document.querySelector('#cpwd').value
  if (pwd == cpwd && enterCapta == capta) {
    
    document.body.textContent = "YOU LOGGEDIN!!"
  }
  else {
    document.body.style.background = "linear-gradient(to bottom right, red, yellow)"
    document.body.textContent = "match password and confirm password (or) check capta"

  }
})

const email = document.querySelector('#email')
const password = document.querySelector('#pwd')
const cpassword = document.querySelector('#cpwd')
const submitbtn = document.querySelector('#submit')
const inpcapta = document.querySelector('#capta')
function check() {


  if (email.value && password.value && cpassword.value && inpcapta.value) {
    submitbtn.disabled = false

  }
  else {
    submitbtn.disabled = true
  }


}

email.addEventListener('input', check)
password.addEventListener('input', check)
cpassword.addEventListener('input', check)
submitbtn.addEventListener('input', check)
inpcapta.addEventListener('input', check)






