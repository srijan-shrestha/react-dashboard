import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import "./Login.scss";
import { json } from "stream/consumers";

const Login = () => {
  // hook to set email
  const [email, setEmail] = useState("");
  // hook to set email
  const [password, setPassword] = useState("");

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // hook to set loading screen and set user data in local storage

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      navigate("/dashboard");
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user, loading]);
  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col text-center p-8 shadow-lg">
        <h2 className="mb-8"> LOGIN</h2>
        <p className="mb-3 text-sm text-slate-500">Please Log In to continue</p>
        <input
          type="text"
          className="p-3 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="p-3 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="p-4 mb-4 button"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        {/* <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button> */}
        <div className="text-sm">
          Don't have an account?{" "}
          <Link className="hover:underline" to="/signup">
            Signup
          </Link>{" "}
          now.
        </div>
      </div>
    </section>
  );
};
export default Login;
