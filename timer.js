let seconds = 10
const timer1 = setInterval(() => {
    let time = new Date()
    let hours = 0
    let minutes = 0
    let show = `${hours}:${minutes}:${seconds}`
    
    seconds--;


    if (seconds < 0) {
        clearInterval(timer1)
        document.querySelector('#dis').textContent = "over!!"
    }

    document.querySelector('#timer').textContent = show
}, 1000);

