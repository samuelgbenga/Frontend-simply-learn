import React, {useState, useEffect} from 'react'
import {User} from './User'

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])



  useEffect(() => {
    setIsLoading(true)

    const controller = new AbortController()


    // fetch takes two params
    // first the url
    // optional signal controll
    // which is very userfull 
    // to allow smooth clean up process
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(setUsers)
      .finally(() => {
        setIsLoading(false)
      })

    // return () => {
    //   controller.abort()
    // }
  }, [])


  return (
    <div><h1>User List</h1>
    {isLoading ? (
<h1>Losding....</h1>

    ):(<ul>
      {users.map(user=>(<User key={user.id} name={user.name}/>))}
    </ul>)}
    </div>
  )
}

export default App