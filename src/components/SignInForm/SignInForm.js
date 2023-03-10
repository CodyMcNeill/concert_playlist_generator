import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./SignInForm.css";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container">
      <p>Please use the form below to log back in</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          auth.signin({
            email: email,
            password: password,
            callback: () => navigate("/profile"),
          });
          setEmail("");
          setPassword("");
        }}
      >
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign Back In</button>
      </form>
    </div>
  );
};

export default SignInForm;
