import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

//store setup
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './Reducers';
import logger from 'redux-logger';

//redux dev tool 
import { composeWithDevTools } from 'redux-devtools-extension';



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));
