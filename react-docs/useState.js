/*
1.0
During the initial render, the returned state (state) is the same as the value passed as 
the first argument (initialState).
If the new state is computed using the previous state, you can pass a function to setState.
The function will receive the previous value, and return an updated value. 
Here’s an example of a counter component that uses both forms of setState:
*/

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
  );
}
