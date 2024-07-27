import React from 'react'
import { ClassComponent } from './ClassComponent';
import FunctionComponent from './FunctionComponent';



const App = () => {
  return (
    <div><ClassComponent something={"samuel"}/>
    
    <br />
    <FunctionComponent/>
    </div>
  )
}

export default App;