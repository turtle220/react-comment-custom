import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import customJs from './libraries/js/custom';

/* 
import $ from 'jquery';
global.jQuery = global.$ = $;
window.jQuery = global.jQuery;
*/
customJs(window.jQuery);

const store = createStore (
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
