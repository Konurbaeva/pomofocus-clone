const startButton = document.querySelector('[data-action="start"]')
const stopButton =  document.querySelector('[data-action="stop"]')
const resetButton =  document.querySelector('[data-action="reset"]')


const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

let timerTime = 0;
let interVal;
let isRunning = false

setInterval(function(){
// timerTime+=1
timerTime++

const numberOfMinutes = Math.floor(timerTime/60)
// modulo function
const numOfSeconds = timerTime%60

console.log({numberOfMinutes, numOfSeconds})

minutes.innerText = pad(numberOfMinutes)
seconds.innerText = pad(numOfSeconds)
}, 1000)

function pad(number){
    return number > 10? '0' + number: number
    //     if(number>10){
//         return '0' + number
//     } else {
//         return number
//     }
}

function startTimer(){
  if(isRunning) return
 isRunning = true;
interVal = setInterval(incrementTimer, 1000)
}

function stopTimer() {
    if(!isRunning) return
    isRunning = false
clearInterval(interVal)
}

function resetTimer(){
timerTime =0
minutes.innerText= '00'
seconds.innerText= '00'
}

function incrementTimer() {
timerTime+=1

const numberOfMinutes = Math.floor(timerTime/60)
// modulo function
const numOfSeconds = timerTime%60

console.log({numberOfMinutes, numOfSeconds})

minutes.innerText = pad(numberOfMinutes)
seconds.innerText = pad(numOfSeconds)
}

startButton.addEventListener("click", startTimer)
stopButton.addEventListener("click", stopTimer)
resetButton.addEventListener("click", resetTimer)