import React, { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function refreshPage() {
    window.location.reload(false);
  }

  const handleEmailChange = (event) => {
    dispatch({ type: "SET_EMAIL", payload: event.target.value });
  };

  const handlePasswordChange = (event) => {
    dispatch({ type: "SET_PASSWORD", payload: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the email and password values from state
    console.log("Email:", state.email);
    console.log("Password:", state.password);
    refreshPage();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Email</legend>
          <input
            type="email"
            placeholder="Enter your e-mail"
            value={state.email}
            onChange={handleEmailChange}
          />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input
            type="password"
            placeholder="Enter your valid password"
            value={state.password}
            onChange={handlePasswordChange}
          />
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
