import React from "react";
import styles from "./signup.module.css";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";

const Signup = () => {
  return (
    <form className={styles.signupForm}>
      <h1>Join CornerCart and Start Shopping Smarter!</h1>
      <h2>
        Create your account for exclusive deals, personalized recommendations,
        and a seamless shopping experience.
      </h2>
      <div className={styles.fields}>
        <Label forValue={"name"} name={"Full Name"}></Label>
        <Input type={"text"} idName={"name"}></Input>
      </div>
      <div className={styles.fields}>
        <Label forValue={"email"} name={"Email"}></Label>
        <Input type={"email"} idName={"email"}></Input>
      </div>
      <div className={styles.fields}>
        <Label forValue={"pwd"} name={"Password"}></Label>
        <Input type={"password"} idName={"pwd"}></Input>
      </div>
      <div className={styles.fields}>
        <Label forValue={"pwd"} name={"Confirm Password"}></Label>
        <Input type={"password"} idName={"pwd"}></Input>
      </div>
      <input type="submit" value="Submit" className={styles.submitsp} />
      <div className={styles.reset}>
        <p>Don’t have an account?</p>
        <a href="#">Sign up now</a>
      </div>
    </form>
  );
};

export default Signup;
