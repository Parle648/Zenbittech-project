import { configureStore } from '@reduxjs/toolkit';
import token from '../features/slcies/token-slice/rokenSlice';

const stateStore = configureStore({
  reducer: {
    token: token,
  },
});

export default stateStore;
