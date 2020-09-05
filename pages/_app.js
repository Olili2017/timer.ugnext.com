import React from 'react'
import App, { Component, Container } from 'next/app'
import { Provider } from 'mobx-react'

import store from '../stores'

export default class TimerApp extends App {

  constructor(props){
    super(props)
    this.rootStore = store
  }

  render(){
    const { Component, pageProps } = this.props
    return(
      <Provider {...this.rootStore} >
          <Component {...pageProps} />
      </Provider>
    )
  }
}