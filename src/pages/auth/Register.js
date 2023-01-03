import React, { useState } from "react";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebase";
import Loader from "../../components/Loader";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      toast.error("password do not match");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration successful");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };
  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <div className="auth container">
        <Card>
          <div className="form">
            <h2> Register</h2>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                onChange={(e) => setCPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                {" "}
                Register
              </button>

              <span className="register">
                <p> Already have an account ? </p>
                <Link to="/login"> Login</Link>
              </span>
            </form>
          </div>
        </Card>
        <div className="img">
          <img
            src="https://ix-cdn.b2e5.com/images/27094/27094_3ecebd037d0e48248ae08246bddc547e_1556211385.jpeg"
            width="390px"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
