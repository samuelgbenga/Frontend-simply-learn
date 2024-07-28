import { useContext, useRef } from "react"
import { TodoContext } from "./App"

export default function NewTodoForm() {
  
      // use ref for the name
  const nameRef = useRef()

  // get addNewTodo from App using context provider
  const { addNewTodo } = useContext(TodoContext)

// handle submit update the addNewTodo to the latest
  function handleSubmit(e) {
    e.preventDefault()

    // if nothing return nothing
    if (nameRef.current.value === "") return

    // update addnew todo
    addNewTodo(nameRef.current.value)

    // update the value to nothing
    nameRef.current.value = ""
  }
  
  
    return (
        <form onSubmit={handleSubmit} id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input autoFocus type="text" id="todo-input" ref={nameRef} />
        <button>Add Todo</button>
      </form>
  )
}
