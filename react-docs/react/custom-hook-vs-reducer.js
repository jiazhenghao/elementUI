/* 
1.0
useYourImagination()

Custom Hooks offer the flexibility of sharing logic that wasn’t possible in React components before. 
You can write custom Hooks that cover a wide range of use cases like form handling, animation, 
declarative subscriptions, timers, and probably many more we haven’t considered. 
What’s more, you can build Hooks that are just as easy to use as React’s built-in features.

Try to resist adding abstraction too early. 
Now that function components can do more, it’s likely that the average function component 
in your codebase will become longer. This is normal — don’t feel like you have to immediately 
split it into Hooks. But we also encourage you to start spotting cases where a custom Hook could 
hide complex logic behind a simple interface, or help untangle a messy component.

For example, maybe you have a complex component that contains a lot of local state that is 
managed in an ad-hoc way. useState doesn’t make centralizing the update logic any easier 
so you might prefer to write it as a Redux reducer:
*/
function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    // ... other actions ...
    default:
      return state;
  }
}

/*
Reducers are very convenient to test in isolation, and scale to express complex update logic. 
You can further break them apart into smaller reducers if necessary. 
However, you might also enjoy the benefits of using React local state, 
or might not want to install another library.

So what if we could write a useReducer Hook that lets us manage the local state of our component
with a reducer? A simplified version of it might look like this:
*/
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

/*
Now we could use it in our component, and let the reducer drive its state management:
*/
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddClick(text) {
    dispatch({ type: "add", text });
  }

  // ...
}
/*
The need to manage local state with a reducer in a complex component is 
common enough that we’ve built the useReducer Hook right into React. 
You’ll find it together with other built-in Hooks in the Hooks API reference.
*/
