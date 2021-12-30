import {useReducer} from 'react'
import counterReducer from '../reducers/counterReducer';

const Counter = ({ initialState }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
      <>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <br />
        <p>count: {state.count}</p>

      </>
    );
   };
   
export default Counter;   