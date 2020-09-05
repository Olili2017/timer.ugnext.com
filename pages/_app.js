/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import App from 'next/app';
import { Provider } from 'mobx-react';

import store from '../stores';

export default class TimerApp extends App {
  constructor(props) {
    super(props);
    this.rootStore = store;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.rootStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
