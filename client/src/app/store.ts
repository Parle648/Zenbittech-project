import { configureStore } from '@reduxjs/toolkit';
import token from '../features/slcies/token-slice/tokenSlice';

const stateStore = configureStore({
  reducer: {
    token: token,
  },
});

export default stateStore;
