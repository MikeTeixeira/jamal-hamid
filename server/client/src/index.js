import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import './styles/css/index.css';
import reducers from './reducers';
import {Preloader} from 'react-materialize';
import { loadState, saveState } from './components/localStorage/localStorage';
import {PersistGate} from 'redux-persist/lib/integration/react'
import storage from 'redux-persist/lib/storage'



//--------REDUX--------//
//Provide all of our app with access to the store
import {Provider} from 'react-redux';


//Allows us to use localStorage for our shoppingCart
const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

//------------------------//


//Gives us a animated loading screen

let hasRendered = false;

const appContent = (
    <Provider store={store}>
      <PersistGate loading="loading..." persistor={persistor}>
        <App />
      </PersistGate>
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

