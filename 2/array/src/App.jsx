import React, { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

const App = () => {
  //state
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");

  const [index, setIndex] = useState(0);

  // remove the first letter
  function removeFirstElement() {
    setArray((prev) => prev.slice(1));
  }

  // remove a specific letter
  function removeSpecificLetter(letter) {
    setArray((prev) => prev.filter((item) => item !== letter));
  }

  // add letter to the beginning
  function addLetterToStart(letter) {
    setArray((prev) => [letter, ...prev]);
    setValue("");
  }

  // add letter to the end

  function addLetterToEnd(letter) {
    setArray((prev) => [...prev, letter]);

    setValue("");
  }

  // clear the array
  function clear() {
    setArray([]);
  }

  // reset the array
  function reset() {
    setArray(INITIAL_VALUE);
  }

  function removeLastLetter() {
    setArray((prev) => prev.slice(0, -1));
  }

  // add element to a specific index
  function addLetterAtIndex(letter, index) {
    setArray((prev) => [...prev.slice(0, index), letter, ...prev.slice(index)]);
  }

  // change A to H
  function changeAtoH() {
    setArray((prev) => prev.map((elem) => (elem == "A" ? "H" : elem)));
  }

  return (<div>

   
    <button onClick={()=> removeLastLetter()}>Remove Last Letter</button>
    <br/>
    <button onClick={()=> removeFirstElement()}>Remove first Letter</button>
    <br/>
    <label >Add letter and Index</label><br />
    <input value={value} type="text" onChange={e=> setValue(e.target.value)}/>
    <input value={index} type="number" onChange={e=> setIndex(e.target.value)}/>
    <button onClick={()=>addLetterToEnd(value)}>Add letter to end</button>
    <button onClick={()=>addLetterToStart(value)}>Add letter to Start</button><br />
    <button onClick={()=>addLetterAtIndex(value,index)}>Add letter at index</button>
    <br />
    <button onClick={()=>clear()}>Clear</button>
    <button onClick={()=> reset()}>Reset</button>
    <br />
    {array.join(", ")} <br />

    <button onClick={()=> changeAtoH()}>Change A to H</button>
    
    </div>);
};

export default App;
