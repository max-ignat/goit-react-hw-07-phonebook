import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import rootReducer from './root-reducer'

export const store = configureStore({
  reducer: rootReducer,

  middleware(getDefaultMiddleWare) {
    return getDefaultMiddleWare({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});


export  const persistor = persistStore(store)


// import { configureStore } from '@reduxjs/toolkit';

// import rootReducer from './root-reducer';

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;