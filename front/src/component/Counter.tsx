import React from "react";
import { useRecoilState } from "recoil";
import { CountState } from "../recoil/CounterState";

const Counter = () => {
    const [count, setCount] = useRecoilState(CountState);
    return (
      <div>
        <p>Counter Component State : {count}</p>
        <button
          type="button"
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => setCount((prevState) => prevState - 1)}
        >
          -
        </button>
      </div>
    );
}

export default Counter