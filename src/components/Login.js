import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
          alt='amazon_logo'
          className='login__logo'
        />
      </Link>
      <div className='login__container'>
        <h2>Sign in</h2>
        <form>
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type='submit'
            className='login__signInButton'
            variant='outlined'
            onClick={signIn}>
            Sign in
          </Button>
        </form>
        <p>
          *By signing-in you agree to the Amazon Clone conditionsof Use & Sale.
          Please see our Privacy Notice, our Cookie Notice and our Interest
          based Ads Notice.
        </p>
        <Button
          className='login__RegisterButton'
          variant='outlined'
          onClick={register}>
          Sign up
        </Button>
      </div>
    </div>
  );
}

export default Login;
