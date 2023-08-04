import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginPage = async (e) => {
    e.preventDefault();

    function refreshPage() {
      window.location.reload(true);
    }

    if (!email || !password) {
      alert("enter all fields");
      const timer = setTimeout(() => {
        refreshPage();
      }, 100);
      return () => clearTimeout(timer);
    }

    try {
      const foodResponse = await axios.post(
        `http://localhost:7001/user/login`,
        { email, password }
      );

      if (foodResponse) {
        const timer = setTimeout(() => {
          refreshPage();
        }, 2000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={loginPage}>
        <fieldset>
          <legend>Email</legend>
          <input
            name="email"
            type="text"
            placeholder="Enter your e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input
            name="password"
            type="text"
            placeholder="Enter your valid password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
