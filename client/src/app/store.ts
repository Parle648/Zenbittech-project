import { configureStore } from '@reduxjs/toolkit';
import token from '../features/slcies/token-slice/tokenSlice';
import loading from '../features/slcies/loading-slice/loading';

const stateStore = configureStore({
  reducer: {
    token: token,
    loading: loading,
  },
});

export default stateStore;
