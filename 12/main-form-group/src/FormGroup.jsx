

const FormGroup = ({errorMessage = "", children}) => {
  return (
    <div className={`form-group ${errorMessage.length > 0 ? "error" : ""}`}>
    {children}
    {errorMessage.length > 0 && <div className="msg">{errorMessage}</div>}
  </div>
  )
}

export default FormGroup