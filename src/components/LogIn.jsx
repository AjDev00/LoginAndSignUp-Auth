import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function LogIn() {
  //react hook forms.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //login form params.
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //password visibility.
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const type = "password";
  const type2 = "text";

  //params used in fetching method.
  const [err, setErr] = useState("");

  //check if user username matches user password in the DB.
  async function onSubmit() {
    const response = await fetch(
      "http://localhost:8000/api/get-details/" +
        loginUsername +
        "/" +
        loginPassword
    );
    const datas = await response.json();
    // console.log(datas);

    if (datas.status === true) {
      toast("Login Successfull !!");
      setErr("");
      setLoginUsername("");
      setLoginPassword("");
    } else {
      setErr("Username or password incorrect!");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* //username or email. */}
        <div>
          <div>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Enter email or username"
              onChange={(e) => setLoginUsername(e.target.value) - setErr("")}
              value={loginUsername}
              className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
            />
            {errors.email && (
              <span className="text-red-500 font-semibold px-3">
                This field is required
              </span>
            )}
          </div>
        </div>

        {/* //password. */}
        <div>
          <div>
            <input
              type={passwordVisibility ? type2 : type}
              {...register("password", { required: true })}
              placeholder="Enter password"
              onChange={(e) => setLoginPassword(e.target.value) - setErr("")}
              value={loginPassword}
              className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
            />
            <div onClick={() => setPasswordVisibility(!passwordVisibility)}>
              {passwordVisibility ? (
                <FaEye className="ml-64 -mt-9 opacity-80" size={18} />
              ) : (
                <FaEyeSlash className="ml-64 -mt-9 opacity-80" size={18} />
              )}
            </div>
            <br />
            {errors.password && (
              <span className="text-red-500 font-semibold px-3">
                This field is required
              </span>
            )}
          </div>
        </div>

        {/* //print error. */}
        <div className="flex justify-center items-center">
          {err && <div className="text-red-500 font-semibold">{err}</div>}
        </div>

        {/* //login button. */}
        <div className="justify-center mt-4 items-center flex border border-transparent border-green-500 text-white p-3 bg-green-500 rounded-full font-bold text-[18px] cursor-pointer hover:opacity-80 duration-300">
          <button>Login</button>
        </div>

        {/* //forgotten-pwd. */}
        <div className="px-1 mt-2 text-[18px] text-green-500 font-semibold cursor-pointer hover:opacity-80 duration-300">
          <Link to="/forgot-password">Forgotten Password?</Link>
        </div>
        <div>
          <hr />
        </div>
      </form>
    </div>
  );
}
