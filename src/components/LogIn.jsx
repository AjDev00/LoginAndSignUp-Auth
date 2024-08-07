export default function LogIn() {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter email or username"
              className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter password"
              className="border border-slate-200 bg-slate-200 rounded-full p-3 placeholder:text-black placeholder:opacity-90 w-full text-[18px] placeholder:px-3 focus:outline-green-300"
            />
          </div>
        </div>
        <div className="justify-center mt-4 items-center flex border border-transparent border-green-500 text-white p-3 bg-green-500 rounded-full font-bold text-[18px] cursor-pointer hover:opacity-80 duration-300">
          <button>Login</button>
        </div>
        <div className="px-1 mt-2 text-[18px] text-green-500 font-semibold cursor-pointer hover:opacity-80 duration-300">
          Forgotten Password ?
        </div>
        <div>
          <hr />
        </div>
      </div>
    </div>
  );
}
