import React from "react";
import Counter from "./component/Counter";
import { useRecoilValue } from "recoil";
import { CounterLabelState } from "./recoil/CounterState";

import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import Signin from "./page/Signin";

function App() {
  const countLabel = useRecoilValue(CounterLabelState);

  return (
      <BrowserRouter>
        <Switch>   
          <Route exact path="/" component={Signin}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
