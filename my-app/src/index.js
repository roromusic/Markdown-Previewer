import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import sampleData from './initialState'
import storeFactory from './store'
import { Provider } from 'react-redux'

const initialState = sampleData
const store = storeFactory(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
