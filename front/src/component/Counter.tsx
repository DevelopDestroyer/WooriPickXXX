import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CounterState, CounterTypeState, CounterLabelState } from "../recoil/CounterState";

const Counter = () => {
    const [count, setCount] = useRecoilState(CounterState);
    const [, setCountType] = useRecoilState(CounterTypeState);
    const countLabel = useRecoilValue(CounterLabelState);
    return (
      <div>
        <p>Counter Component State : {countLabel}</p>
        <button
          type="button"
          onClick={() => {
            setCountType("increment");
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => {
            setCountType("decrement");
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    );
};

export default Counter
