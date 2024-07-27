import React, {useState} from 'react'
import "./style.css"
import TodoItem from './TodoItem'

const App = () => {
// title of todo
const [newTodoName, setNewTodoName] = useState("")

// the todos array of objects
  // object include:
  // name, complete status, and id
  const [todos, setTodos] = useState([])


   // add new todo to the todo
   function addNewTodo() {
    if (newTodoName === "") return

    setTodos(currentTodos => {
      return [
        // keep currentTodos
        ...currentTodos,
        { name: newTodoName, completed: false, 
          // generate id using randomUUID
          id: crypto.randomUUID() },
      ]
    })
    setNewTodoName("")
  }

    // update completed to checked value
    function toggleTodo(todoId, completed) {
      setTodos(currentTodos => {
        return currentTodos.map(todo => {
          //affect only the todo with this id
          if (todo.id === todoId)
             return {
            // keep the current todos
            ...todo,
             completed }
          return todo
        })
      })
    }

   // delete the todo list
  function deleteTodo(todoId) {
    setTodos(currentTodos => {
      // filter out this particular 
      return currentTodos.filter(todo => todo.id !== todoId)
    })
  } 

  return (
    <>
    {/* map out all the todos */}
    <ul id='list'>

      {
        todos.map(todo => {
          return (
            <TodoItem
            key={(todo.id)}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
          )

        })
      }

    </ul>

    <div id='new-todo-form'>
      <label htmlFor="todo-input">New Todo</label>
      <input
       type="text"
        id='todo-input'
        value={newTodoName}
        onChange={e => setNewTodoName(e.target.value)}
        />
      <button onClick={addNewTodo}>Add Todo</button>
    </div>
    </>
  )
}

export default App