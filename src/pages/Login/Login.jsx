import React from "react";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import styles from "./login.module.css";

const Login = () => {
  return (
    <form autoComplete="on" className={styles.loginForm}>
      <h1>Welcome Back to CornerCart!</h1>
      <h2>Log in to continue discovering amazing deals and products.</h2>
      <div className={styles.fields}>
        <Label forValue={"email"} name={"Email"}></Label>
        <Input type={"email"} idName={"email"}></Input>
      </div>
      <div className={styles.fields}>
        <Label forValue={"pwd"} name={"Password"}></Label>
        <Input type={"password"} idName={"pwd"}></Input>
      </div>
      <input type="submit" value="Submit" className={styles.submit} />
      <div className={styles.reset}>
        <p>Don’t have an account?</p>
        <a href="#">Sign up now</a>
      </div>
      <div className={styles.reset}>
        <p>Forgot your password?</p>
        <a href="#">Reset it here</a>
      </div>
    </form>
  );
};

export default Login;
