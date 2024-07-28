import { useContext, useRef, useState } from "react";
import { TodoContext } from "./App";

export default function TodoItem({ id, name, completed }) {
  // get some item from the parrent App TodoContex
  const { toggleTodo, deleteTodo, updateTodoName } = useContext(TodoContext);

  // create state for editing
  const [isEditing, setIsEditing] = useState(false);

  // ref the input button for editing the todo
  const nameRef = useRef();

  // add save button to save edit
  function handleSubmit(e) {
    e.preventDefault();

    if (nameRef.current.value === "") return;

    updateTodoName(id, nameRef.current.value);
    setIsEditing(false);
  }

  return (
    <li className="list-item">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input autoFocus type="text" defaultValue={name} ref={nameRef} />
          <button data-button-edit>Save</button>
        </form>
      ) : (
        <>
          {/* display todo name with checkbox for complete or not */}
          <label className="list-item-label">
            <input
              checked={completed}
              type="checkbox"
              data-list-item-checkbox
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{name}</span>
          </label>

          {/* display button to edit */}
          <button data-button-edit onClick={() => setIsEditing(true)}>
            Edit
          </button>

          {/* display buttonn to delete */}
          <button onClick={() => deleteTodo(id)} data-button-delete>
            Delete
          </button>
        </>
      )}
    </li>
  );
}
