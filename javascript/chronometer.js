class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }
  // fails jasmine spec check unless I call the callback function directly from here
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      callback()
    }, 1000);
  }

  getMinutes() {
    this.minutes = this.seconds / 60
    if (this.minutes % 1 == 0) {
      return this.minutes
    }
    else return Math.floor(this.minutes)
    
  }

  getSeconds() {
    this.seconds = this.currentTime
    return this.seconds % 60
  }

  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`
    }
    return num
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    if (this.getMinutes() < 10 && this.getSeconds() < 10) {
      return `0${this.getMinutes()}:0${this.getSeconds()}`
    }
    else if (this.getMinutes() < 10) {
      return `0${this.getMinutes()}:${this.getSeconds()}`
    }
    else if (this.getSeconds() < 10) {
      return `${this.getMinutes()}:0${this.getSeconds()}`
    }
    else {
      return `${this.getMinutes()}:${this.getSeconds()}`
    }
  }


}
