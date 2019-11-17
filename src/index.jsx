import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

const container = document.getElementById('root');

const appWithProvider = ( 
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(appWithProvider, container);