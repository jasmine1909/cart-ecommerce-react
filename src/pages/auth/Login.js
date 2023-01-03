import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.scss";
import Card from "../../components/card/Card";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login successful !");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const user = result.user;
        toast.success("Login successful");
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        toast.error(error.message);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className="auth container">
        <div className="img">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000"
            width="390px"
          />
        </div>
        <Card>
          <div className="form">
            <h2> Login</h2>
            <form>
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
              <button className="--btn --btn-primary " onClick={loginUser}>
                {" "}
                Login
              </button>
              <div className="links">
                <Link to="/reset"> Reset Password</Link>
              </div>

              <p> --or---</p>
              <button
                className="--btn --btn-danger --btn-block"
                onClick={loginWithGoogle}
              >
                {" "}
                Login With Google
              </button>
              <span className="register">
                <p> Don't have an account ? </p>
                <Link to="/register"> Register</Link>
              </span>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Login;
