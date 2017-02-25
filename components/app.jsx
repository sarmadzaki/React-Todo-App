import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Todos from './todos'
import * as firebase from 'firebase';
 var config = {
    apiKey: "AIzaSyDcAn4JEiICAeBeCbpnLcYEors4sf6mjyw",
    authDomain: "sam-todo-react.firebaseapp.com",
    databaseURL: "https://sam-todo-react.firebaseio.com",
    storageBucket: "sam-todo-react.appspot.com",
    messagingSenderId: "727433514972"
  };
firebase.initializeApp(config);
let reactElement = document.getElementById('react')
render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  reactElement
)
