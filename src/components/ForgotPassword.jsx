import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ForgotPassword() {
  //react hook form params.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //forgot-password form params.
  const [confUsername, setConfUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confNewPassword, setConfNewPassword] = useState("");

  const history = useHistory();

  function onSubmit() {
    console.log("signup submitted");
  }
  return (
    <div>
      <div className="px-3 mt-24">
        <div className="border border-transparent rounded-tl-xl rounded-tr-xl rounded-br-xl shadow-xl px-3 bg-white">
          <div className="text-[18px] font-semibold flex justify-center text-center py-3">
            Olodo change your password here!
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 mt-4"
          >
            <div>
              <div>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="Enter email or username"
                  onChange={(e) => setConfUsername(e.target.value)}
                  value={confUsername}
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
                  placeholder="Enter new password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                  className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
                />
                {errors.password && (
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
                  {...register("confirmPassword", { required: true })}
                  placeholder="Confirm new password"
                  onChange={(e) => setConfNewPassword(e.target.value)}
                  value={confNewPassword}
                  className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 font-semibold px-3">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <button
                  onClick={() => history.go(-1)}
                  className="justify-center mt-4 items-center flex border border-transparent text-white p-2 px-4 bg-slate-400 rounded-md font-bold text-[18px] cursor-pointer hover:opacity-80 duration-300"
                >
                  Back
                </button>
              </div>
              <div>
                <button className="justify-center mt-4 items-center flex border border-transparent border-green-500 text-white p-2 px-4 bg-green-500 rounded-md font-bold text-[18px] cursor-pointer hover:opacity-80 duration-300">
                  Change
                </button>
              </div>
            </div>
            <div>
              <hr />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
