import React, { useState } from "react";
import styles from "./signup.module.css";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signUp, setSignUp] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorDisplay, setErrorDisplay] = useState({});
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const { fullName, email, password, confirmPassword } = signUp;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
    if (errorDisplay[name]) {
      setErrorDisplay((prev) => {
        const updatedErrors = { ...prev };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validateFields();
    let payload = { fullName, email, password };
    if (Object.keys(errors).length === 0) {
      try {
        let { data } = await axios.post("http://localhost:5000/user", payload);
        setSignUpSuccess(!signUpSuccess);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorDisplay(errors);
    }
  };

  const validateFields = () => {
    let error = {};
    if (!fullName.trim()) {
      error["fullName"] = "Name cannot be Empty";
    }
    if (!email.trim()) {
      error["email"] = "Email cannot be empty";
    }
    if (!password.trim()) {
      error["password"] = "Password cannot be empty";
    }
    if (!confirmPassword.trim()) {
      error["confirmPassword"] = "Password cannot be empty";
    }

    if (password !== confirmPassword) {
      error["passwordMismatch"] = "Passwords do not match";
    }
    return error;
  };

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
      {errorDisplay["fullName"] && <span>{errorDisplay["fullName"]}</span>}
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
      {errorDisplay["email"] && <span>{errorDisplay["email"]}</span>}
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
      {errorDisplay["password"] && <span>{errorDisplay["password"]}</span>}
      <div className={styles.fields}>
        <Label forValue={"pwd"} name={"Confirm Password*"}></Label>
        <Input
          type={"password"}
          idName={"pwd"}
          name="confirmPassword"
          value={confirmPassword}
          handle={handleChange}
        ></Input>
      </div>
      {errorDisplay["confirmPassword"] && (
        <span>{errorDisplay["confirmPassword"]}</span>
      )}
      <input type="submit" value="Submit" className={styles.submitsp} />
      {errorDisplay["passwordMismatch"] && (
        <span>{errorDisplay["passwordMismatch"]}</span>
      )}
      {signUpSuccess && (
        <div className={styles.success}>Sign Up Successful</div>
      )}

      <div className={styles.reset}>
        <p>Already have an account?</p>
        <a href="#">Login now</a>
      </div>
    </form>
  );
};

export default Signup;
