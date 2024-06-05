import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialBtn from "../../../Components/SocialBtn/SocialBtn";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth()
    
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

 
  const navigate = useNavigate();
  const location = useLocation();
  

  
  const onSubmit = (data) => {
    const userInfo={
        email: data.email,
        password: data.password
        
    }
    login(data.email, data.password)
          .then((result) => {
              const loggedInUser = result.user;
              
              if (loggedInUser) {
                  toast.success('Successfully logged in your profile')
                // localStorage.setItem('token', res.data.token)
              }

              navigate(location?.state?.from?.pathname || "/");
          })
          .catch((error) => {
              if (error) {
                  toast.error("Incorrect Email or password");
              }
          });
    
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full max-w-xs input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full max-w-xs input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <p className="absolute top-[18px] text-white right-2 text-xl">
                  {showPassword ? (
                    <FaEyeSlash
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  ) : (
                    <FaEye
                      className="text-gray-800"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  )}
                </p>
              </div>
              
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            
            <input
              className="w-full max-w-xs text-black text-xl btn bg-[#FBC42D]"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New to Power Tools{" "}
              <Link className="text-base text-red-500" to="/signup">
                Create New Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <div>
            <span className="flex items-center justify-center -mt-6">
              <SocialBtn />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
