import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("harsh@gmail.com");
  const [password, setPassword] = useState("Harsh@123");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async () => {
    
    try {
      const res = await axios.post(
        BASE_URL+"/login",
        {
          email: emailId,
          password: password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate('/');
    } catch (err) {
      console.log("Error :: " + err);
    }
  };

  return (
    <div className="flex justify-center m-7">
      <div className="card bg-base-200 w-96 shadow-xl ">
        <div className="card-body -mb-6">
          <h2 className="card-title justify-center">Login</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email ID :{emailId}</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password :{password}</span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <div className="card-actions justify-end m-5">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
