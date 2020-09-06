import { observable, action, computed } from 'mobx'

class TimerStore {

  @observable seconds = 0;
  @observable minutes = 0;
  @observable hours = 0;
  @observable days = 0;
  @observable running = false;

  constructor(){}

  @action setRunning(isRunning) {
    this.running = isRunning
    if (isRunning){
      this.timer = setInterval(() => {
        this.increamentSeconds()
      }, 1000)
    } else {
      clearInterval(this.timer)
    }
  }

  @computed get isRunning(){
    return this.running
  }

  @action start(){
    if (!this.isRunning){
      this.setRunning(true)
    }
  }

  @action stop(){
    if (this.isRunning){
      this.setRunning(false)
    }
  }

  @action increamentSeconds(){
    if (this.seconds === 59){
      this.increamentMinutes()
      this.seconds = 0
      return
    }
    this.seconds++
  }

  @action increamentMinutes(){
    if (this.minutes === 59 && this.seconds === 59){
      this.increamentHours()
      this.minutes = 0
      this.seconds = 0
      return
    }
    this.minutes++
  }


  @action increamentHours(){
    if (this.seconds === 59 && this.minutes === 59 && this.hours === 23){
      this.increamentDays()
      this.seconds = 0
      this.minutes = 0
      this.hours = 0
      return
    }
    this.hours++
  }


  @action increamentDays(){
    this.days++
    this.hours = 0
  }

  @action reset(){
    this.hours = 0
    this.minutes = 0
    this.seconds = 0
    this.days = 0
  }

  @computed get getSeconds(){
    if (this.seconds < 10){
      return `0${this.seconds}`
    }
    return this.seconds
  }

  @computed get getMinutes(){
    if (this.minutes < 10){
      return `0${this.minutes}`
    }
    return this.minutes
  }

  @computed get getHours(){
    if (this.hours < 10){
      return `0${this.hours}`
    }
    return this.hours
  }

  @computed get getDays(){
    return this.days
  }


}

export default TimerStore