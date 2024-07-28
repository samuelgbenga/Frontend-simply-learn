import React from "react";

import useArray from "./useArray";

const INITIAL_ARRAY = [1, 2, 3];

const App = () => {
  // destructure the value
  const {
    array,
    set,
    push,
    replace,
    filter,
    remove,
    clear,
    reset,
    pushInFront,
  } = useArray(INITIAL_ARRAY);

  return (
    <>
      {/* print array */}
      <div>{array.join(", ")}</div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          alignItems: "flex-start",
          marginTop: "1rem",
        }}
      >
        {/* push value into back */}
        <button onClick={() => push(4)}>Push 4</button>

        {/* push value into front */}
        <button onClick={() => pushInFront(6)}>Push 6</button>
      </div>

      {/* replace value at index */}
      <button onClick={() => replace(1, 9)}>
        Replace the second element with 9
      </button>

      {/*  set array */}
      <br />
      <button onClick={() => set([4, 5, 6])}>Set to [4, 5, 6]</button>

      <br />
      {/* filter element */}
      <button onClick={() => filter((n) => n < 3)}>
        Keep numbers less than 3
      </button>

      <br />
      {/* reset the array */}
      <button onClick={reset}>Reset</button>

      <br />
      {/* remove element at index */}
      <button onClick={() => remove(1)}>Remove second element</button>

      <br />
      {/* clear the array */}
      <button onClick={clear}>Clear</button>
    </>
  );
};

export default App;
