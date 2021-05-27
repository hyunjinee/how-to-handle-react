import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import rootReducer from './modules';
import App from './App';
import { Provider} from 'react-redux';
import {composeWithDevtools} from 'redux-devtools-extension';



const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// const store = createStore(rootReducer, composeWithDevtools());

ReactDOM.render(
  <Provider store={store}><App /></Provider>
    
  ,
  document.getElementById('root')
);


