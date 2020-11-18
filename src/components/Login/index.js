import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "../../firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // if (auth) {
        history.push("/");
        // }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="/img/login.png" alt="" />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form onSubmit={signin}>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login_signinbtn">Sign in</button>
        </form>

        <p>
          By continuing, you agree to Amazon clone's Conditions of Use and
          Privacy Notice.
        </p>
        <div className="login_regbreaker">
          <h5>New to Amazon?</h5>
        </div>
        <button onClick={register} className="login_registerbtn">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
