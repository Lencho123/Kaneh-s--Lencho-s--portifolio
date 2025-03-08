"use client";

import { useStore } from "../context/Store/state-store";

const LayoutSetting = () => {
  const layoutOne = useStore((state) => state.layoutOne);
  const setLayoutOne = useStore((state) => state.setLayoutOne);
  const darkMode = useStore((state) => state.darkMode);
  const setDarkMode = useStore((state) => state.setDarkMode);
  const setShowSideBar = useStore((state) => state.setShowSideBar);

  return (
    <div onClick={() => setShowSideBar(false)}>
      <div className="z-200 border border-slate-600 bg-slate-500 rounded-xl p-[0.5rem] top-[2rem] right-[1.5rem] rounded-tl-3xl rounded-tr-none rounded-b-none">
        <span className="font-semibold text-black">Layouts</span>
        <div className="flex flex-col gap-[0.4rem] border border-slate-600 rounded-md p-[0.5rem] bg-emerald-500  top-[2rem] right-0 ">
          <span
            className={`cursor-pointer hover:bg-emerald-300 active:bg-emerald-300 p-[0.4rem] rounded-md ${
              layoutOne ? "bg-emerald-400" : ""
            }`}
            onClick={() => {
              setLayoutOne(true);
            }}
          >
            Landscape
          </span>
          <span
            className={`cursor-pointer hover:bg-emerald-300 active:bg-emerald-300 p-[0.4rem] rounded-md ${
              layoutOne ? "" : "bg-emerald-400"
            }`}
            onClick={() => setLayoutOne(false)}
          >
            Portrait
          </span>
        </div>
      </div>

      <div className="z-200 border border-slate-600 bg-slate-500 rounded-xl p-[0.5rem] top-[2rem] right-[1.5rem] rounded-t-none">
        <span className="font-semibold text-black">Themes</span>
        <div className="flex flex-col gap-[0.4rem] border border-slate-600 rounded-md p-[0.5rem] bg-emerald-500  top-[2rem] right-0 ">
          <span
            className={`cursor-pointer hover:bg-emerald-300 active:bg-emerald-300 p-[0.4rem] rounded-md ${
              darkMode ? "" : "bg-emerald-400"
            }`}
            onClick={() => setDarkMode(false)}
          >
            Light Mode
          </span>
          <span
            className={`cursor-pointer hover:bg-emerald-800 active:bg-emerald-900 p-[0.4rem] rounded-md ${
              darkMode ? "bg-emerald-900" : " "
            }`}
            onClick={() => setDarkMode(true)}
          >
            Dark Mode
          </span>
        </div>
      </div>
    </div>
  );
};

export default LayoutSetting;
