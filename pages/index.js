import React, { Component } from 'react'
import { observer, inject} from 'mobx-react'

@inject("timerStore")
@observer
export default class Timer extends Component {
  render(){
    const store = this.props.timerStore
    return(
    <>
      <p>hello {store.seconds}</p>
    </>)
  }
}
