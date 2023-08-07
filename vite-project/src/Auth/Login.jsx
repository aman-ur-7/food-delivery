import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useData } from "../../src/DataContext";
import { NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setDataFromLogin } = useData();
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
        setDataFromLogin(foodResponse);
        navigate("/*", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={loginPage}>
        <input
          name="email"
          type="text"
          placeholder="Enter your e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="text"
          placeholder="Enter your valid password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="resets">
          <button className="button" type="submit">
            Login
          </button>
          <NavLink className="nav-link" to="/reset">
            <span>Reset password?</span>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
