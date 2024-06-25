import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import SocialBtn from "../../Components/SocialBtn/SocialBtn";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUser } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const createdUser = result.user;

      const userInfo = {
        email: createdUser.email,
        name: createdUser.displayName || data.name,
      };
      axios.post("https://power-tools-server-nine.vercel.app/users", userInfo).then((res) => {
        // localStorage.setItem("token", res.data.token);
        if (res.data.insertedId) {
          toast.success("User created successfully");
          navigate(location?.state?.from.pathname || "/");
        }
      });

      return updateUser(data.name);
    });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full max-w-xs input input-bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

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
            <div className="relative w-full max-w-xs form-control">
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
              className="w-full max-w-xs text-white btn bg-[#2E2E2E]"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p>
            <small>
              Already have an account?{" "}
              <Link className="text-[#f3b610] text-[16px]" to="/login">
                Please login
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

export default SignUp;
