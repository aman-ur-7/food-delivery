import React, { useEffect, useState, useTransition } from "react";
import axios from "axios";
import { useData } from "../DataContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const { setId } = useData("");

  function refreshPage() {
    window.location.reload(true);
  }
  const registerPage = async (e) => {
    if (!name || !email || !address || !password) {
      alert("Enter the fields");
      setTimeout(() => {
        refreshPage();
      }, 2000);
      return () => clearTimeout(timer);
    }
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const foodResponse = await axios.post(
        `http://localhost:7001/user/register`,
        { name, email, password, address },
        config
      );

      if (foodResponse) {
        setId(foodResponse);
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
    <form className="form" onSubmit={registerPage}>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your valid password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <button className="button" type="submit">
        sign-up
      </button>
    </form>
  );
};

export default Register;
