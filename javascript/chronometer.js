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
    if (this.currentTime == 0) {
      return 0
    }
    this.minutes = this.currentTime / 60
    return Math.floor(this.minutes)
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
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }


}
