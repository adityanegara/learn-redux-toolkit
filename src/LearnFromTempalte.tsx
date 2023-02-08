import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { decrement, increment, selectCount } from "./features/counter/counterSlice";
import CreateSliceComponent from "./learn/createSlice/CreateSliceComponent";

const LearnFromTemplate = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <p>Number of count : {count} </p>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
};

export default LearnFromTemplate;
