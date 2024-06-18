import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";


const SocialBtn = () => {
  const { googleLogin } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  const handleGoogleSignUp = () => {
    googleLogin()
      .then((res) => {
        const userInfo = {
          email: res?.user?.email,
          name: res?.user?.displayName,
          photo: res?.user?.photoURL

        };

        axios.post('http://localhost:5000/users', userInfo)
          .then(res => {

            if (res.data) {
              toast.success('User created successfully');

              navigate(location?.state?.from.pathname || "/")
            }
          })




      });
  };
  return (
    <div className="flex gap-8 mt-5">
      <button
        className=" rounded-full font-medium text-center uppercase  w-10 max-w-[40px] h-10 max-h-[40px] border-2  border-black"
        type="button"
      >
        <span className="flex items-center justify-center text-xl">
          <i className="text-center">
            <FaFacebookF />
          </i>
        </span>
      </button>
      <button
        onClick={handleGoogleSignUp}
        className=" rounded-full font-medium text-center uppercase  w-10 max-w-[40px] h-10 max-h-[40px] border-2  border-black text-xl  flex items-center justify-center"
        type="button"
      >
        <FaGoogle />
      </button>
      <button
        className=" rounded-full font-medium text-center uppercase  w-10 max-w-[40px] h-10 max-h-[40px] border-2  border-black"
        type="button"
      >
        <span className="flex items-center justify-center text-xl">
          <i className="text-center">
            <FaGithub />
          </i>
        </span>
      </button>
    </div>
  );
};
export default SocialBtn;
