import { useContext } from "react";
import { AppContext } from "../App";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

export default function Container() {
  const { signUp, handleLogIn, handleSignUp } = useContext(AppContext);

  return (
    <div className="px-3 mt-24">
      <div className="border border-transparent rounded-tl-xl rounded-tr-xl rounded-br-xl shadow-xl px-3 bg-white">
        <div className="flex flex-row justify-between mb-10 text-[18px]">
          <div onClick={handleLogIn} className="">
            {signUp ? (
              <div className="font-semibold justify-center items-center flex ml-6 mt-5 w-24">
                Log In
              </div>
            ) : (
              <div className="items-center justify-center flex border border-transparent text-white p-3 bg-green-500 font-semibold rounded-tl-xl rounded-tr-xl rounded-br-xl px-14 py-4 -ml-3.5 hover:opacity-70 duration-300">
                Log In
              </div>
            )}
          </div>
          <div onClick={handleSignUp} className="">
            {signUp ? (
              <div className="font-semibold justify-center items-center flex border border-transparent bg-green-500 text-white p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl -mr-3.5 px-14 py-4 hover:opacity-70 duration-300">
                Sign Up
              </div>
            ) : (
              <div className="font-semibold justify-center items-center flex mr-6 mt-4 w-24">
                Sign Up
              </div>
            )}
          </div>
        </div>
        <div>{signUp ? <SignUp /> : <LogIn />}</div>
      </div>
    </div>
  );
}
