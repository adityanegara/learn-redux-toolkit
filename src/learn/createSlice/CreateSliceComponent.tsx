import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  decrement,
  increment,
  multiply,
  incrementBy,
  decrementBy,
  selectCount,
} from "./createSlice";

const CreateSliceComponent = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(incrementBy(10));
        }}
      >
        Increment By 10
      </button>
      <p>Counter : {count}</p>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(decrementBy(10));
        }}
      >
        Decrement By 10
      </button>
      <button onClick={()=>{dispatch(multiply(3))}}>
        Multiply by 3
      </button>
      
    </div>
  );
};

export default CreateSliceComponent;
