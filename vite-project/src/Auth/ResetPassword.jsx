import React, { useState } from "react";
import axios from "axios";
import { useData } from "../DataContext";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { id } = useData();
  console.log(id);

  const resetPassword = async () => {
    e.preventDefault();

    if (!email || !password) {
      alert("Enter the fields");
      // setTimeout(() => {
      //   refreshPage();
      // }, 1000);
      // return () => clearTimeout(timer);
    }
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `http://localhost:7001/user/update/${id}`,
        { email, password },
        config
      );

      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="reset-password">
      <form onSubmit={resetPassword}>
        <div className="reset-content">
          <h1>Reset</h1>
          <div>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Reset password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="reset-button" type="submit">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
