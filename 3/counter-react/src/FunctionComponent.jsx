import React from 'react'

const FunctionComponent = () => {
    const [name, setName] = React.useState("")
    const [age, setAge] = React.useState(0)

  return (
    <div><input value={name} onChange={e => setName(e.target.value)} />
    <br />
    <br />
    <button onClick={() => setAge(currentAge => currentAge - 1)}>-</button>
    {age}
    <button onClick= {() => setAge(currentAge => currentAge + 1)}>+</button>
    <br />
    <br />
    My name is {name} and I am {age} years old.
</div>
  )
}

export default FunctionComponent