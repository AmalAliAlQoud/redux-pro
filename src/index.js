import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loaders from './reducers/users';
//import rootReducer from './reducers'
import {reducers} from './reducers'
import thunk from "redux-thunk";

import Home from './pages/Home'

const store=createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render( <Provider store={store}>
                  <App />
                  </Provider>, document.getElementById("root"));



