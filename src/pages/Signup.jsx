import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import axios from "axios";
import { errorToast, successToast } from "../services/toast.service";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();

  const [inputData, setInputData] = useState();

  const handleInput = (e) => {
    e.preventDefault();
    // console.log(e.target.name, e.target.value)
    setInputData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // console.log("click")

    try {
      const resp = await axios.post(
        "https://backend-mu-pied.vercel.app/users/register",
        inputData
      );
      // console.log(resp)
      if (resp.data.status) {
        console.log(resp.data.message);
        successToast(resp.data.message);
        nav("/login");
      }
    } catch (error) {
      console.log(error.response.data.message);
      errorToast(error.response.data.message);
    }
  };

  return (
    <>
      <div className="">
        <SignupForm handleInput={handleInput} handleSignup={handleSignup} />
      </div>
    </>
  );
};

export default Signup;
