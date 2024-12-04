import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; 
import googleLogo from "../assets/google-logo.png";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const {  setUser,  manageProfile, registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  
  const { register, handleSubmit, formState: { errors }, setError: setFormError } = useForm();

  const onSubmit = (data) => {
    setError("");
    const { email, password,name, image  } = data;
    console.log(email,password,name, image )

    if (password.length < 6) {
      setFormError("password", {
        type: "manual",
        message: "Password must contain at least 6 characters"
      });
      return;
    }

    if (!/[a-z]/.test(password)) {
      setFormError("password", {
        type: "manual",
        message: "Password must contain at least one lowercase letter"
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setFormError("password", {
        type: "manual",
        message: "Password must contain at least one uppercase letter"
      });
      return;
    }

    registerUser(email, password)
      .then(() => {
        manageProfile(name, image).then(() => {
          const updatedUser = {
            email,
            displayName: name,
            photoURL: image,
          };
          setUser(updatedUser);
          navigate('/');
        }).catch((err) => {
          setError("Profile update failed. Please try again.");
          console.error(err);
        });
      })
      .catch((err) => {
        setError("Registration failed. Please try again.");
        console.error(err);
      });
  };

 
 

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-14 text-primary active animate__animated animate__heartBeat animate__infinite animate__slower animate__delay-5s">
            Registration Form
          </h2>
          <div className="card bg-base-100 w-full max-w-5xl shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-96 lg:w-[500px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl text-gray-600">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-900">{errors.name.message}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600 font-bold text-2xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  {...register("email", { required: "Email is required", pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address"
                  } })}
                />
                {errors.email && <p className="text-red-900">{errors.email.message}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600 font-bold text-2xl">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("image", { required: "Photo URL is required" })}
                />
                {errors.image && <p className="text-red-900">{errors.image.message}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600 font-bold text-2xl">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-900">{errors.password.message}</p>}
              </div>

              {error && <p className="text-red-900">{error}</p>}

              <div className="form-control mt-6">
                <button className="btn bg-primary text-white font-bold text-2xl">Register</button>
              </div>

              <h2 className="text-lg mt-3 flex items-center gap-2">
                Already have an account?
                <Link to="/login">
                  <span className="flex items-center gap-4 text-primary active text-2xl font-extrabold">
                    Log in
                  </span>
                </Link>
              </h2>
            </form>

            <div className="divider text-primary font-bold text-xl">OR</div>
            <div className="space-y-4">
              <button className="pb-8 w-full flex items-center justify-center gap-2">
                <img src={googleLogo} alt="Google" className="w-6 h-6" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
