import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.js";
import configureStore from "./store/configureStore.js";

const rootElement = document.getElementById('root');
const store = configureStore({});
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, rootElement);
