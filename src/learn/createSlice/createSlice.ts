import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const incrementBy = createAction<number>("incrementBy");
export const decrementBy = createAction<number>("decrementBy");

const counter = createSlice({
  name: "counter",
  initialState: 0 as number,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    multiply: {
      reducer: (state, action: PayloadAction<number>) => state * action.payload,
      prepare: (value?: number) => ({payload: value || 2}),
    },
  },
  extraReducers: (builder) =>{
    builder.addCase(incrementBy, (state, action) => {
        return state + action.payload
    })
    builder.addCase(decrementBy, (state, action) => {
        return state - action.payload
    })
  }
});

export const {increment, decrement, multiply} = counter.actions
export const selectCount = (state: RootState) => state.learnCreateSliceReducer
export default counter.reducer;