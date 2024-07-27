import React, {useState, useEffect} from 'react'

const Child = () => {

    const [age, setAge] = useState(0)
    const [name, setName] = useState("")
  

    // renders anyway
    // without dependency
    // but rerenders
    // rerenders for any change in the component
    useEffect(() => {
      console.log("Re-Render")
    })
  

    // return this without dependency
    useEffect(() => {
      console.log("Hi")
        
      // this will render even 
      // if you live the component
      return () => {
        console.log("Bye")
      }
    }, [])


  // return this on change of name and age
    useEffect(() => {
      console.log(`My name is ${name} and I am ${age} years old`)
    }, [name, age])
  

    // depend on age and also on time
    useEffect(() => {
      document.title = name
  
      const timeout = setTimeout(() => {
        console.log(`My name is ${name}`)
      }, 1000)
  
      return () => {
        clearTimeout(timeout)
      }
    }, [name])


  return (
    <div>

<input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge(a => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge(a => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.

    </div>
  )
}

export default Child