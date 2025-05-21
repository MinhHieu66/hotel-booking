import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(up())}>UP</button>
      <button onClick={() => dispatch(down())}>DOWN</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </>
  );
}

export default Counter;
