import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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

  function onSubmit() {
    console.log("login submitted");
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div>
          <div>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Enter email or username"
              onChange={(e) => setLoginUsername(e.target.value)}
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
        <div>
          <div>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter password"
              onChange={(e) => setLoginPassword(e.target.value)}
              value={loginPassword}
              className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
            />
            {errors.password && (
              <span className="text-red-500 font-semibold px-3">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="justify-center mt-4 items-center flex border border-transparent border-green-500 text-white p-3 bg-green-500 rounded-full font-bold text-[18px] cursor-pointer hover:opacity-80 duration-300">
          <button>Login</button>
        </div>
        <div className="px-1 mt-2 text-[18px] text-green-500 font-semibold cursor-pointer hover:opacity-80 duration-300">
          <Link to="/forgot-password">Forgotten Password ?</Link>
        </div>
        <div>
          <hr />
        </div>
      </form>
    </div>
  );
}
