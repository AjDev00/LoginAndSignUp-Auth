import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import loadingImg from "../assets/loading4.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function SignUp() {
  //react hook forms params.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //signup form params.
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [loading, setLoading] = useState(0);
  const history = useHistory();

  const type = "password";
  const type2 = "text";

  async function onSubmit(allData) {
    const newData = {
      ...allData,
      email: email,
      name: username,
      password: password,
    };
    const res = await fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    const data = await res.json();

    if (data.status === false) {
      setEmailErr(data.errors.email);
      setUsernameErr(data.errors.name);
      setPasswordErr(data.errors.password);
      //   setLoading(false);
    } else {
      toast("SignUp successfull!");
      setEmail("");
      setEmailErr("");
      setUsername("");
      setUsernameErr("");
      setPassword("");
      setPasswordErr("");
      //   setLoading(false);
      //   console.log(data);
      //   setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* //email. */}
        <div>
          <div>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
            />
            {emailErr ? (
              <div className="text-red-500 font-semibold px-3">{emailErr}</div>
            ) : (
              errors.email && (
                <span className="text-red-500 font-semibold px-3">
                  This field is required
                </span>
              )
            )}
          </div>
        </div>

        {/* //username. */}
        <div>
          <div>
            <input
              type="text"
              {...register("username", { required: true })}
              placeholder="Choose username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
            />
            {usernameErr ? (
              <div className="text-red-500 font-semibold px-3">
                {usernameErr}
              </div>
            ) : (
              errors.username && (
                <span className="text-red-500 font-semibold px-3">
                  This field is required
                </span>
              )
            )}
          </div>
        </div>

        {/* //password. */}
        <div>
          <div>
            <input
              type={passwordVisibility ? type2 : type}
              {...register("password", { required: true })}
              placeholder="Create password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
            />
            <div onClick={() => setPasswordVisibility(!passwordVisibility)}>
              {passwordVisibility ? (
                <FaEye className="ml-64 -mt-9 opacity-80" size={18} />
              ) : (
                <FaEyeSlash className="ml-64 -mt-9 opacity-80" size={18} />
              )}
            </div>
            {passwordErr ? (
              <div className="text-red-500 font-semibold px-3">
                {passwordErr}
              </div>
            ) : (
              errors.password && (
                <span className="text-red-500 font-semibold px-3">
                  This field is required
                </span>
              )
            )}
          </div>
        </div>
        <div className="justify-center mt-10 items-center flex border border-transparent border-green-500 text-white p-3 bg-green-500 rounded-full font-bold text-[18px] cursor-pointer hover:opacity-80 duration-300">
          <button type="submit">Create Account</button>
          {/* <div className="flex flex-row gap-4 justify-center items-center">
              <span type="submit">Creating account</span>
              <div>
                <img
                  src={loadingImg}
                  alt=""
                  className="w-10 h-10 animate-spin"
                />
              </div>
            </div> */}
        </div>
        <div className="px-1 mt-2 text-[18px]  font-semibold text-center">
          Clicking create account means you agree to our{" "}
          <span className="text-green-500 cursor-pointer">
            terms and conditions.
          </span>
        </div>
        <div>
          <hr />
        </div>
      </form>
    </div>
  );
}
