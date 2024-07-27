import React from 'react'
import {Child} from './Child';

const App = () => {
const [show, setshow] = React.useState(true); 

const ChildComponent = show ? <Child/> : "";
  return (
    <div>
<button onClick={()=> setshow(!show)}>Click</button>
    {ChildComponent}
    </div>
  )
}

export default App