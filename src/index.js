import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
// import './index.css';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux'; //!give access to store for all componets



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
