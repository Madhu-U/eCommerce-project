import React, { useState } from "react";
import styles from "./signup.module.css";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import axios from "axios";

const Signup = () => {
  const [signUp, setSignUp] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { fullName, email, password } = signUp;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { fullName, email, password };
    try {
      let { data } = await axios.post("http://localhost:5000/user", payload);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const validateForm = () =>{

  // }

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit}>
      <h1>Join CornerCart and Start Shopping Smarter!</h1>
      <h2>
        Create your account for exclusive deals, personalized recommendations,
        and a seamless shopping experience.
      </h2>
      <div className={styles.fields}>
        <Label forValue={"name"} name={"Full Name*"}></Label>
        <Input
          type={"text"}
          idName={"name"}
          name="fullName"
          value={fullName}
          handle={handleChange}
        ></Input>
      </div>
      <div className={styles.fields}>
        <Label forValue={"email"} name={"Email*"}></Label>
        <Input
          type={"email"}
          idName={"email"}
          name="email"
          value={email}
          handle={handleChange}
        ></Input>
      </div>
      <div className={styles.fields}>
        <Label forValue={"pwd"} name={"Password*"}></Label>
        <Input
          type={"password"}
          idName={"pwd"}
          name="password"
          value={password}
          handle={handleChange}
        ></Input>
      </div>
      <div className={styles.fields}>
        <Label forValue={"pwd"} name={"Confirm Password*"}></Label>
        <Input type={"password"} idName={"pwd"} name="confirmPassword"></Input>
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
