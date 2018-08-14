import React, { Component, Fragment } from "react";
import { Provider } from 'react-redux';
import Dashboard from './Provider/BrowserRouter/Dashboard/Dashboard';
import createAppStore from '../lib/store';

import './App.css';

const store = createAppStore();

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Dashboard />
        </Fragment>
      </Provider>
    );
  }
}