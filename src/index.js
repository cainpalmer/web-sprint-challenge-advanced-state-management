import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import "./index.css";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk, logger));

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    rootElement
);