import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import learnCreateSliceReducer from "../learn/createSlice/createSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    learnCreateSliceReducer: learnCreateSliceReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

