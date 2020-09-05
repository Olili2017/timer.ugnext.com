import TimerStore from './timer'

export default (function store(){
  return {
    timerStore: new TimerStore()
  }
})()