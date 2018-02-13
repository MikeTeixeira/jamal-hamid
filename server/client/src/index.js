import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import './styles/css/index.css';
import reducers from './reducers';
import {Preloader} from 'react-materialize';



//--------REDUX--------//
//Provide all of our app with access to the store
import {Provider} from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxPromise, reduxThunk)));

//------------------------//




//------- REACT PRE-LOADER AND COMPONENT RENDERING ---------//

let hasRendered = false;

const appContent = (
  <Provider store={store}>
    <App />
  </Provider>
)


const renderApp = () => {
  if(!hasRendered){
    setTimeout((renderApp) => {
      ReactDOM.render(appContent, document.getElementById('root'));
      hasRendered = true;  
  }, 1000);
  }
}

//Pre loader when the site loads up
const preLoader = (
  <div className="preLoader-wrapper" >
    <Preloader color='red' className="preLoader" size='big'/>
  </div>
)

ReactDOM.render(preLoader, document.getElementById('root'));

renderApp();

