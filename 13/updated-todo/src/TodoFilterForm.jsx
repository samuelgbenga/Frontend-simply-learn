import React from "react";

const TodoFilterForm = ({ name, setName, hideCompleted, setHideCompleted }) => {
  return (
    <div className="filter-form">
      {/* search by name */}
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* hide completed or not */}
      <label>
        <input
          type="checkbox"
          checked={hideCompleted}
          onChange={(e) => setHideCompleted(e.target.checked)}
        />
        Hide Completed
      </label>
    </div>
  );
};

export default TodoFilterForm;
