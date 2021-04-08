import React from "react";
import Counter from "./component/Counter";
import { useRecoilValue } from "recoil";
import { CountState } from "./recoil/CounterState";

function App() {
  const count = useRecoilValue(CountState);

  return (
    <div className="App">
      <div>Counter Test {count}</div>
      <Counter />
    </div>
  );
}

export default App;
