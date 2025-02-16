import React, { useEffect, useState } from "react";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import styles from "./login.module.css";
import axios from "axios";

const Login = () => {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const [errorDisplay, setErrorDisplay] = useState({});
  const { email, password } = loginValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValues((prev) => ({ ...prev, [name]: value }));

    if (errorDisplay[name]) {
      setErrorDisplay((prev) => {
        const updatedErrors = { ...prev };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
    if (errorDisplay["submit"]) {
      setErrorDisplay((prev) => {
        const updatedErrors = { ...prev };
        delete updatedErrors["submit"];
        return updatedErrors;
      });
    }
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/user");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const validateForm = () => {
    let error = {};
    if (!email.trim()) {
      error["email"] = "Email cannot be empty";
    }
    if (!password.trim()) {
      error["password"] = "Password cannot be empty";
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const submitStatus = checkLogin();
      if (submitStatus) {
        console.log("Login successful");
      } else {
        setErrorDisplay((prev) => ({
          ...prev,
          submit: "Incorrect Password or Email",
        }));
        console.log(submitStatus);
      }
    } else {
      setErrorDisplay(errors);
    }
  };

  const checkLogin = () => {
    const currentUser = users.find((x) => x.email === email);
    if (currentUser) {
      if (currentUser.password !== password) {
        return false;
      }
      return true;
    }
    return false;
  };

  return (
    <form
      autoComplete="on"
      className={styles.loginForm}
      onSubmit={handleSubmit}
    >
      <h1>Welcome Back to CornerCart!</h1>
      <h2>Log in to continue discovering amazing deals and products.</h2>
      <div className={styles.fields}>
        <Label forValue={"email"} name={"Email"}></Label>
        <Input
          type={"email"}
          idName={"email"}
          name={"email"}
          value={email}
          handle={handleChange}
        ></Input>
      </div>
      {errorDisplay["email"] && <span>{errorDisplay["email"]}</span>}
      <div className={styles.fields}>
        <Label forValue={"pwd"} name={"Password"}></Label>
        <Input
          type={"password"}
          idName={"pwd"}
          name={"password"}
          value={password}
          handle={handleChange}
        ></Input>
      </div>
      {errorDisplay["password"] && <span>{errorDisplay["password"]}</span>}
      <input type="submit" value="Submit" className={styles.submit} />
      {errorDisplay["submit"] && <span>{errorDisplay["submit"]}</span>}
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
