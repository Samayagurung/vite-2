import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import { errorToast, successToast } from "../services/toast.service";

const Login = () => {
  const [inputData, setInputData] = useState();

  const changeHandle = (e) => {
    e.preventDefault();
    // console.log(e.target.name, e.target.value)

    setInputData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const loginHandle = async (e) => {
    e.preventDefault();
    // console.log("click")
    try {
      const resp = await axios.post(
        "https://backend-mu-pied.vercel.app/users/login",
        inputData
      );
      // console.log(resp.data.message)
      if (resp.data.status) {
        successToast(resp.data.message);
      }
    } catch (error) {
      // console.log(error.response.data.message)
      errorToast(error.response.data.message);
    }
  };

  return (
    <>
      <LoginForm changeHandle={changeHandle} loginHandle={loginHandle} />
    </>
  );
};

export default Login;
