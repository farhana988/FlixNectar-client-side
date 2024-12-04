// import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../assets/google-logo.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);

    signIn(email, password)
      .then(() => {
        navigate(location.state?.from || "/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <div>
        <div className="hero bg-base-200 py-32">
          <div className="hero-content flex-col">
            <h2
              className="text-3xl md:text-5xl lg:text-7xl font-bold mb-14 text-primary 
       "
            >
              Login Form
            </h2>
            <div className="card bg-base-100 w-full max-w-5xl shrink-0 shadow-2xl shadow-primary">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body w-96 lg:w-[500px]"
              >
                {/* Email input field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-2xl text-gray-600">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })} 
                    placeholder="email"
                    className="input input-bordered"
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
                    <span className="label-text font-bold text-2xl text-gray-600">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })} 
                    placeholder="password"
                    className="input input-bordered"
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
                      className="label-text-alt link link-hover text-xl text-gray-500"
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
                <button className="pb-8 w-full flex items-center justify-center gap-2">
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
