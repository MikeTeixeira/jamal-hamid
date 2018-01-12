import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './styles/css/index.css';
import reducers from './reducers';
import {Preloader} from 'react-materialize';

//--------REDUX--------//
//Provide all of our app with access to the store
import {Provider} from 'react-redux';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//------------------------//


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


const preLoader = (
  <div className="preLoader-wrapper" >
    <Preloader color='red' className="preLoader" size='big'/>
  </div>
)

ReactDOM.render(preLoader, document.getElementById('root'));

renderApp();

