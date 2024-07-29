import { useLoaderData } from "react-router-dom"
import { getTodos } from "../api/todos"
import { TodoItem } from "../components/TodoItem"

const TodoList = () => {

    // loads the todos into
    // a variable
    const todos = useLoaderData()

  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}

// gets todo from the backend
function loader({ request: { signal } }) {
    return getTodos({ signal })
  }


export const todoListRoute = {
    loader,
    element: <TodoList />,
  }