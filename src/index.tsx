import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './redux/store';
import './i18n';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback="">
        <App />
      </Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
