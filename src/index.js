import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/reducer-root';

import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

const storeVar = createStore(
    rootReducer,
     applyMiddleware(thunk)
   );

ReactDOM.render(
<Provider store ={storeVar}>
    <App />
</Provider>
, document.getElementById('root'));
//registerServiceWorker();
