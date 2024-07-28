import React, { createContext, useReducer, useEffect, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import TodoFilterForm from "./TodoFilterForm";
import "./styles.css";

// local storage key
const LOCAL_STORAGE_KEY = "TODOS";

// reducer actions
const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
};

// the reducer function with two parametes
function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ];

    case ACTIONS.UPDATE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, name: payload.name };
        }

        return todo;
      });
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, completed: payload.completed };
        }

        return todo;
      });

    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== payload.id);

    default:
      throw new Error(`No action found for ${type}.`);
  }
}

// export the context so others can use
export const TodoContext = createContext();

const App = () => {
  const [filterName, setFilterName] = useState("");
  const [hideCompletedFilter, setHideCompletedFilter] = useState(false);

  // initialize the reducer with dispatch instead of setTodos
  // pass in three params the reducer empty array and the initial value
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    // get the todos from local storage
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);

    // if value is null give it the initial value
    if (value == null) return initialValue;

    // else give it the already existing value
    return JSON.parse(value);
  });

  const filteredTodos = todos.filter((todo) => {
    // filter by completed
    if (hideCompletedFilter && todo.completed) return false;

    // filter by search
    return todo.name.includes(filterName);
  });

  useEffect(() => {
    // on change of todos set the key in local storage again
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // add new todo
  const addNewTodo = (name) => {
    dispatch({ type: ACTIONS.ADD, payload: { name } });
  };

  // toggle Todo to completed
  const toggleTodo = (todoId, completed) => {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } });
  };

  // edit to do name
  const updateTodoName = (id, name) => {
    dispatch({ type: ACTIONS.UPDATE, payload: { id, name } });
  };

  // delete the todo
  const deleteTodo = (todoId) => {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addNewTodo,
        toggleTodo,
        updateTodoName,
        deleteTodo,
      }}
    >
      <TodoFilterForm
        name={filterName}
        setName={setFilterName}
        hideCompleted={hideCompletedFilter}
        setHideCompleted={setHideCompletedFilter}
      />
      <TodoList />
      <NewTodoForm />
    </TodoContext.Provider>
  );
};

export default App;
