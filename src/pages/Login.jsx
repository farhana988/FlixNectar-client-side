// import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../assets/google-logo.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";
import Swal from "sweetalert2";
const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const { isToggled } = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {register, handleSubmit, formState: { errors },} = useForm();


  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then(() => {
        navigate(location.state?.from || "/");
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Something went wrong. Please try again!',
          confirmButtonText: 'Try Again',
        });
      });
  };

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location.state?.from || "/");
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Google Login Failed',
          text: 'Something went wrong with Google login. Please try again!',
          confirmButtonText: 'Try Again',
        });
      });
  };


  return (
    <div>
      <div>
        <div className="hero py-32">
          <div className="hero-content flex-col">
            <h2
              className={`text-3xl md:text-5xl lg:text-7xl font-bold mb-14 
        ${isToggled ? "text-primary" : "text-ivory"} active`}
            >
              Login Form
            </h2>

            <div
              className={`card w-full max-w-5xl shrink-0 shadow-2xl shadow-primary ${
                isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
              }`}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body w-96 lg:w-[500px]"
              >
                {/* Email input field */}
                <div className="form-control">
                  <label className="label">
                    <span
                      className={`font-bold text-2xl ${
                        isToggled ? "text-darkSlate" : "text-ivory"
                      }`}
                    >
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="email"
                    className={`input input-bordered  ${
                      isToggled
                        ? "text-darkSlate"
                        : "bg-[#5b5d5f88]  text-ivory"
                    }`}
                  />
                  {/* Error message for email */}
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password input field */}
                <div className="form-control">
                  <label className="label">
                    <span
                      className={`label-text font-bold text-2xl ${
                        isToggled ? "text-darkSlate" : "text-ivory"
                      }`}
                    >
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    placeholder="password"
                    className={`input input-bordered  ${
                      isToggled
                        ? "text-darkSlate"
                        : "bg-[#5b5d5f88]  text-ivory"
                    }`}
                  />
                  {/* Error message for password */}
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                  <label className="label">
                    <a
                      href="#"
                      className={`label-text-alt link link-hover text-xl opacity-50 ${
                        isToggled ? "text-darkSlate" : "text-ivory"
                      }`}
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>

                {/* Submit button */}
                <div className="form-control mt-6">
                  <button className="btn bg-primary text-white font-bold text-2xl">
                    Login
                  </button>
                </div>

                {/* Register link */}
                <h2 className="text-lg mt-3 flex items-center gap-2">
                  No account yet?{" "}
                  <Link to="/register">
                    <span className=" flex items-center gap-4  text-primary active text-2xl font-extrabold">
                      register
                    </span>
                  </Link>
                </h2>
              </form>

              {/* Divider for OR */}
              <div className="divider text-primary font-bold text-xl">OR</div>
              <div className="space-y-4">
                {/* Google login button */}
                <button
                  onClick={handleGoogleLogIn}
                  className="pb-8 w-full flex items-center justify-center gap-2"
                >
                  <img src={googleLogo} alt="Google" className="w-6 h-6" />
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
