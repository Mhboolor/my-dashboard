import React, { useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { frozen } from "../partilcle/frozen";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

function Register({ loginHandler, name, setName, pass, setPass }) {
  const [showPass, setShowPass] = useState(false);

  const changeShow = () => {
    setShowPass((prev) => !prev);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
      <div id="tsparticles"></div>
      <div id="flag">
        <div id="green-div"></div>
        <div id="white-div"></div>
        <div id="red-div"></div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={frozen}
        className="flex items-center justify-center"
      />
      <div className="flex items-center justify-center h-screen px-5 sm:p-0">
        <div className="flex flex-col text-white bg-white/10 rounded-[10px] backdrop-blur-[30px] border-[2px] border-white/5 shadow-[0_0_40px_rgba(8,7,16,0.6)] p-9 w-full sm:w-[400px]">
          <p className=" text-3xl font-medium text-center">فرم ورود</p>
          <div className="flex flex-col gap-2 mt-7">
            <label htmlFor="name" className="block text-base font-medium">
              نام کاربری
            </label>
            <input
              type="text"
              id="name"
              placeholder="ایمیل یا نام کاربری"
              className="block w-full rounded-sm py-2 px-3 text-sm font-light bg-white/10 outline-none placeholder:text-[1b1b1b]"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mt-7">
            <label htmlFor="pass" className="block text-base font-medium">
              رمزعبور
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                id="pass"
                placeholder="رمزعبور"
                className="block w-full rounded-sm py-2 px-3 text-sm font-light bg-white/10 outline-none placeholder:text-[1b1b1b]"
                value={pass}
                onChange={e => setPass(e.target.value)}
              />
              <button
                type="button"
                className=" absolute top-[10px] left-2"
                onClick={changeShow}
              >
                {showPass ? <IoMdEye /> : <IoMdEyeOff />}
              </button>
            </div>
          </div>
          <div className="mt-7 w-full">
            <button
              className="w-full bg-white text-[#080710] text-lg rounded py-3 font-semibold"
              onClick={loginHandler}
            >
              ورود
            </button>
          </div>
          <div className="mt-5 flex flex-col gap-2 text-sm text-gray-1">
            <p>نام کاربری : bolori</p>
            <p>رمزعبور : 12345678</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
