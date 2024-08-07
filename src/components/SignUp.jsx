import { useState } from "react";
import { useForm } from "react-hook-form";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    console.log("signup submitted");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div>
          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              type="text"
              {...register("username", { required: true })}
              placeholder="Choose username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
            />
            {errors.username && (
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
              placeholder="Create password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
          <button>Create Account</button>
        </div>
        <div className="px-1 mt-2 text-[18px]  font-semibold">
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
