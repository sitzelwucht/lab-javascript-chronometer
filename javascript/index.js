const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

let running = false

function printTime() {
  printSeconds()
  printMinutes()
}

function printMinutes() {
  let mins = chronometer.getMinutes()
  let twoDigitsMin = chronometer.twoDigitsNumber(mins)

  if (chronometer.getMinutes() < 60) {
    minUni.innerHTML = chronometer.getMinutes()
  }
  else if (chronometer.getMinutes() >= 10) {
    minUni.innerHTML = twoDigitsMin.toString()[1]
    minDec.innerHTML = twoDigitsMin.toString()[0]
  }
}

function printSeconds() {
  let secs = chronometer.getSeconds()
  let twoDigitsSec = chronometer.twoDigitsNumber(secs)

  if(chronometer.getSeconds() < 60) {
    if (chronometer.getSeconds() < 10) {
      secUni.innerHTML = chronometer.getSeconds();
    }
    else if (chronometer.getSeconds() >= 10) {
      secUni.innerHTML = twoDigitsSec.toString()[1]
      secDec.innerHTML = twoDigitsSec.toString()[0]
    }
  }
  if(chronometer.getSeconds() % 60 === 0) {
      secUni.innerHTML = '0'
      secDec.innerHTML = '0'
  }

}


function printSplit() {
  let timeItem = document.createElement('li')
  timeItem.innerHTML = chronometer.splitClick()
  splits.appendChild(timeItem)
}

function clearSplits() {
  splits.innerHTML = ''
}

function setStopBtn() {
  btnLeft.classList.add('stop')
  btnLeft.classList.remove('start')
  btnLeft.innerText = 'STOP'
}

function setSplitBtn() {
  btnRight.classList.add('split')
  btnRight.classList.remove('reset')
  btnRight.innerText = 'SPLIT'
}

function setStartBtn() {
  btnLeft.classList.add('start')
  btnLeft.classList.remove('stop')
  btnLeft.innerText = 'START'
}

function setResetBtn() {
  btnRight.classList.add('reset')
  btnRight.classList.remove('split')
  btnRight.innerText = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  running == false ? running = true : running = false

  if (running) {
    chronometer.startClick(printTime)
    setStopBtn() 
    setSplitBtn()
  }
  if (!running) {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  if (running) {
    setSplitBtn()
    printSplit()
  }
  else if (!running) {
    setResetBtn()
    clearSplits()
    chronometer.resetClick()
    printTime()
  }
});


