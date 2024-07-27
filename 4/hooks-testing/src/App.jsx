import React, { useState } from 'react'
import Child from './Child';

const App = () => {
const [show, setShow] = useState(true);

const childComponent = show ? <Child/> : null;


  return (
    <div>

<button onClick={() => setShow(!show)}>Toggle Child</button>

{childComponent}
    </div>
  )
}

export default App