import { observable, action, computed } from 'mobx'

class TimerStore {

  @observable seconds = 0;

  @action addSecond(){
    this.seconds++
  }

  @computed get getPassedSeconds(){
    return this.seconds
  }

  @computed get timeTaken(){
    return "0:00:00";
  }
}

export default TimerStore