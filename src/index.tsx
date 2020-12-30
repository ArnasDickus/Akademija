import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import './i18n';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <Suspense fallback="">
                    <App/>
                </Suspense>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
