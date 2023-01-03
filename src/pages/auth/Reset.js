import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import Loader from "../../components/Loader";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        setIsLoading(false);
        toast.success("Reset Password sent !");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className="auth container">
        <div className="img">
          <img
            src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-4652.jpg?w=2000"
            width="390px"
          />
        </div>
        <Card>
          <div className="form">
            <h2> Reset Password</h2>
            <form onSubmit={resetPassword}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button type="submit" className="--btn --btn-primary --btn-block">
                {" "}
                Reset Password
              </button>

              <div className="links">
                <p>
                  <Link to="/login">Login</Link>
                </p>
                <p>
                  {" "}
                  <Link to="register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Reset;
