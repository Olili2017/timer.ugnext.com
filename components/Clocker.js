/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import styles from '../public/styles/clocker.module.css';

@inject('timerStore')
@observer
export default class Clocker extends Component {

  constructor(props){
    super(props)
    this.timeStore = props.timerStore
  }
  render(){
    return (
      <>
        <div className={styles.clock}>
          <span className={styles.ticker}>{this.timeStore.getDays || '00'}</span>
          <span className={styles.dot}>:</span>
          <span className={styles.ticker}>{this.timeStore.getHours || '00'}</span>
          <span className={styles.dot}>:</span>
          <span className={styles.ticker}>{this.timeStore.getMinutes || '00'}</span>
          <span className={styles.dot}>:</span>
          <span className={styles.ticker}>{this.timeStore.getSeconds || '00'}</span>
        </div>
      </>
    );
  }
}
