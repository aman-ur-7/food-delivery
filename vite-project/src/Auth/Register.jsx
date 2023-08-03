import React from "react";

const Register = () => {
  return (
    <form className="form">
      <fieldset>
        <legend>Name</legend>
        <input type="text" placeholder="Enter your name" />
      </fieldset>
      <fieldset>
        <legend>Email</legend>
        <input type="email" placeholder="Enter your e-mail" />
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <input type="password" placeholder="Enter your valid password" />
      </fieldset>
      <fieldset>
        <legend>Address</legend>
        <input type="text" placeholder="Enter your address" />
      </fieldset>
      <button>sign-up</button>
    </form>
  );
};

export default Register;
