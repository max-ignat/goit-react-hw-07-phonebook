import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import store  from './redux/store';
import { Provider } from 'react-redux'; //!give access to store for all componets



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}

  </Provider>
);
