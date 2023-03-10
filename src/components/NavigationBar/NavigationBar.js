import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";

const NavigationBar = () => {
  const auth = useAuth();
  return (
    <header className="NavigationBar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/howitworks">How It Works</Link>
          </li>
          {auth.user ? (
            <>
              <li>
                <Link to="/generator">Generator</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li onClick={() => auth.signout()}>Sign Out</li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
