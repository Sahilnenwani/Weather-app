import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware} from 'redux';
import thunkmiddleware from 'redux-thunk';
import allReducers from "./reducers"
import { Provider } from 'react-redux'


const store= createStore(
  allReducers,
  applyMiddleware(thunkmiddleware)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
