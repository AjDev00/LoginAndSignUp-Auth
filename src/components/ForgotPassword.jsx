import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

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

  //error handling params.
  const [err, setErr] = useState("");
  const [pwdErr, setPwdErr] = useState("");
  const [userErr, setUserErr] = useState("");

  //password visibility params.
  const [newPasswordVisibility, setNewPasswordVisibility] = useState(false);
  const [confPasswordVisibility, setConfPasswordVisibility] = useState(false);
  const type = "password";
  const type2 = "text";

  const history = useHistory();

  //update password using api.
  async function onSubmit(data) {
    if (newPassword === confNewPassword) {
      const newData = {
        ...data,
        name: confUsername,
        password: confNewPassword,
      };
      const res = await fetch(
        "http://localhost:8000/api/update-password/" + confUsername,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newData),
        }
      );

      const allData = await res.json();

      if (allData.status === false && allData.code === 400) {
        setPwdErr(allData.errors.password[0]);
      } else if (allData.status === false && allData.code === 404) {
        setUserErr(allData.message);
      } else {
        toast("Password Updated!");
        history.push("/");
      }

      // console.log(allData);
    } else {
      setErr("Passwords do not match!");
    }
  }

  return (
    <div>
      <div className="px-3 mt-24 min-[1280px]:px-96 md:mt-20">
        <div className="border border-transparent rounded-tl-xl rounded-tr-xl rounded-br-xl shadow-xl px-3 bg-white">
          <div className="text-[18px] font-semibold flex justify-center text-center py-3 md:py-10">
            Olodo, change your password here!
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 mt-4"
          >
            {/* //email or username. */}
            <div>
              <div>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="Enter email or username"
                  onChange={(e) =>
                    setConfUsername(e.target.value) -
                    setErr("") -
                    setUserErr("") -
                    setPwdErr("")
                  }
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

            {/* //new password. */}
            <div>
              <div>
                <input
                  type={newPasswordVisibility ? type2 : type}
                  {...register("password", { required: true })}
                  placeholder="Enter new password"
                  onChange={(e) =>
                    setNewPassword(e.target.value) -
                    setErr("") -
                    setUserErr("") -
                    setPwdErr("")
                  }
                  value={newPassword}
                  className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
                />
                <div
                  onClick={() =>
                    setNewPasswordVisibility(!newPasswordVisibility)
                  }
                >
                  {newPasswordVisibility ? (
                    <FaEye
                      className="ml-64 -mt-9 opacity-80 md:ml-[510px] cursor-pointer"
                      size={18}
                    />
                  ) : (
                    <FaEyeSlash
                      className="ml-64 -mt-9 opacity-80 md:ml-[510px] cursor-pointer"
                      size={18}
                    />
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

            {/* //confirm new password. */}
            <div>
              <div>
                <input
                  type={confPasswordVisibility ? type2 : type}
                  {...register("confirmPassword", { required: true })}
                  placeholder="Confirm new password"
                  onChange={(e) => setConfNewPassword(e.target.value)}
                  value={confNewPassword}
                  className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
                />
                <div
                  onClick={() =>
                    setConfPasswordVisibility(!confPasswordVisibility)
                  }
                >
                  {confPasswordVisibility ? (
                    <FaEye
                      className="ml-64 -mt-9 opacity-80 md:ml-[510px] cursor-pointer"
                      size={18}
                    />
                  ) : (
                    <FaEyeSlash
                      className="ml-64 -mt-9 opacity-80 md:ml-[510px] cursor-pointer"
                      size={18}
                    />
                  )}
                </div>
                <br />
                {errors.confirmPassword && (
                  <span className="text-red-500 font-semibold px-3">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* //print error. */}
            <div className="flex justify-center items-center">
              {userErr ? (
                <div className="text-red-500 font-semibold">{userErr}</div>
              ) : pwdErr ? (
                <div className="text-red-500 font-semibold text-center">
                  {pwdErr}
                </div>
              ) : (
                err && <div className="text-red-500 font-semibold">{err}</div>
              )}
            </div>

            {/* //back & change button. */}
            <div className="flex flex-row justify-between">
              <div>
                <div
                  onClick={() => history.go(-1)}
                  className="justify-center mt-4 items-center flex border border-transparent text-white p-2 px-4 bg-slate-400 rounded-md font-bold text-[18px] cursor-pointer hover:opacity-80 duration-300"
                >
                  Back
                </div>
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
