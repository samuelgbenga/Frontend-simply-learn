import { useRef, useState } from "react";
import { checkEmail, checkPassword } from "./validators";

export const RefForm = () => {
  // use ref email
  const emailRef = useRef();

  // use ref passwrod
  const passwordRef = useRef();

  // set states for email, password and after submission
  // array of errors both email and password
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  // boolean check submission status
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  // handle on submit
  function onSubmit(e) {
    e.preventDefault();
    // set after submission to true
    setIsAfterFirstSubmit(true);

    // check email and password using emailRef
    const emailResults = checkEmail(emailRef.current.value);
    const passwordResults = checkPassword(passwordRef.current.value);

    // set the email and password errrors if there is any
    setEmailErrors(emailResults);
    setPasswordErrors(passwordResults);

    // if it is successfull send success alert
    if (emailResults.length === 0 && passwordResults.length === 0) {
        alert("Success");
      
    }
  }

  return (
    <form onSubmit={onSubmit} className="form">
      {/* enter email */}
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          onChange={
            // update if the use error on user submit
            isAfterFirstSubmit
              ? (e) => setEmailErrors(checkEmail(e.target.value))
              : undefined
          }
          className="input"
          type="email"
          id="email"
          ref={emailRef}
        />

        {/* show email errors */}
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
        )}
      </div>

      {/* enter password on change */}
      <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          ref={passwordRef}
          onChange={
            isAfterFirstSubmit
              ? (e) => setPasswordErrors(checkPassword(e.target.value))
              : undefined
          }
        />
        {/* show password errors on change */}
        {passwordErrors.length > 0 && (
          <div className="msg">{passwordErrors.join(", ")}</div>
        )}
      </div>

      {/* submit button */}
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};
