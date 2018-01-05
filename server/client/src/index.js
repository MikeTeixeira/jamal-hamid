import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './styles/css/index.css';
import reducers from './reducers';

//--------REDUX--------//
//Provide all of our app with access to the store
import {Provider} from 'react-redux';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
