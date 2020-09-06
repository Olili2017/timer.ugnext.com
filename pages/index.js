import React, { Component } from 'react'
import Clocker from '../components/Clocker'
import { observer, inject} from 'mobx-react'
// import styled from 'styled-components';
// import background from '../public/timer_bg.jpg';

import styles from '../public/styles/timer.module.css'

@inject("timerStore")
@observer
export default class Timer extends Component {

  constructor(props){
    super(props)
    this.timerStore = props.timerStore
  }

  render(){

    return(
    <>
      <div className={styles.container}>
        <Clocker />
        <div className={styles.actions}>
          <button className={styles.actionbtn} onClick={() => this.timerStore.start()}>start</button>
        <button className={styles.actionbtn} onClick={() => this.timerStore.stop()}>stop</button>
        <button className={styles.actionbtn} onClick={() => this.timerStore.reset()}>reset</button>
        </div>
      </div>
    </>)
  }
}
