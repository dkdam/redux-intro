import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {decrement, increment} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>

      {/* hardcoded numbers on the increment/decrement functions */}
      <button onClick={() => dispatch(increment(7))} >+</button>
      <button onClick={() => dispatch(decrement(9))} >-</button>

      {isLogged ? <h3>Valuable Information I Shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
