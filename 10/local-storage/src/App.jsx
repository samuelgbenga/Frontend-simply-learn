import React from "react";

import { useLocalStorage } from "./useLocalStorage"

import { useState } from "react";

const App = () => {

  // take new hobby input
  const [newHobby, setNewHobby] = useState("")

  // set firstName using normal variable
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "");

  // set last name using function
  const [lastName, setLastName] = useLocalStorage("LAST_NAME", () => {
    return "Default";
  });

  // set hobbies as arrays
  const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
    "Programming",
    "Weight Lifting",
  ]);

  const handleSubmit = () => {
    setHobbies(currentHobbies => [...currentHobbies, newHobby]);
    setNewHobby("");
  }


  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>
          FirstName
          <input type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          />
        </label>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>
          LastName
          <input type="text"
           value={lastName}
           onChange={e => setLastName(e.target.value)}
          />
        </label>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>
          Input Hobby
          <input
            type="text"
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
          />
          <button onClick={handleSubmit}>Add New Hobby</button>
        </label>
        <div>{hobbies.join(", ")}</div>
      </div>
    </>
  );
};

export default App;
