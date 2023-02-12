import React, { useRef, useState } from "react";
import "./Login.css";

import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let hasError = false;
    const newError = { ...error };

    if (!email) {
      newError.email = "Email is required";
      hasError = true;
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      newError.email = "Email is invalid";
      hasError = true;
    } else {
      newError.email = "";
    }

    if (!password) {
      newError.password = "Password is required";
      hasError = true;
    } else if (password.length < 8) {
      newError.password = "Password must be at least 8 characters long";
      hasError = true;
    } else {
      newError.password = "";
    }

    setError(newError);

    if (!hasError) {
      const timer = setTimeout(() => {
        alert("Anda Berhasil Masuk.");
        setLoading(false);
      }, 3000);
    } else {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div>
        <div className="hello-section">
          <p className="section-1">Hello</p>
          <p className="section-2">Enter your email and password to login.</p>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <p className="label-form">Email</p>
              <input
                type="text"
                name="email"
                className="input-form"
                ref={emailRef}
              />
              {error.email && <p className="invalid-feedback">{error.email}</p>}
            </div>
            <div className="form-container">
              <p className="label-form">Password</p>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="email"
                  className="input-form"
                  ref={passwordRef}
                />
                {showPassword ? (
                  <IoMdEyeOff
                    className="password-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <IoMdEye
                    className="password-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              {error.password && (
                <p className="invalid-feedback">{error.password}</p>
              )}
            </div>
            <div className="additional-login">
              <div className="check-form">
                <input type="checkbox" className="checkbox" />
                <p className="remember-me">Remember Me</p>
              </div>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <div className="form-button">
              <button type="submit" className="login-button" disabled={loading}>
                {loading ? "Loading..." : "Login"}
              </button>
              <button className="signup-button">Sign Up</button>
            </div>
          </form>
          <div className="another-login">
            <div>
              <p className="another-text">Or, login with</p>
            </div>

            <div className="another-button">
              <button className="button-social">Facebook</button>
              <button className="button-social">Linked In</button>
              <button className="button-social">Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
