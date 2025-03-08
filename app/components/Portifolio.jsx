"use client";
import React from "react";
import bankdash from "../../public/bank-dash.png";
import quizapp from "../../public/quiz-app.png";
import leetcode from "../../public/leetcode.png";
import googleform from "../../public/google-form.png";
import Image from "next/image";
import { EyeIcon } from "lucide-react";
import { useStore } from "../context/Store/state-store";
const Portifolio = () => {
  const darkMode = useStore((state) => state.darkMode);
  return (
    <section
      className={`p-[1rem]  ${
        darkMode ? " text-white p-[0.5rem]" : "text-slate-800"
      }`}
    >
      <h3 className="text-3xl font-bold mb-[1rem]">Portifolio</h3>
      <div className="w-ful">
        <h5 className="font-semibold text-2xl mb-[0.5rem]">My Projects:</h5>

        <div className="flex flex-col gap-[1rem] sm:gap-[2rem]">
          <div
            className="flex sm:flex-row flex-col
           gap-[1rem] sm:gap-[2rem] overflow-hidden"
          >
            <div className=" relative rounded-t-2xl basis-1/2">
              <h4
                className={`p-[1rem]  ${
                  darkMode ? " text-white p-[0.5rem]" : "text-slate-800"
                }`}
              >
                BankDhash Website
              </h4>
              <Image
                src={bankdash}
                className="w-full h-full object-cover mx-auto"
                alt="BankDhash Website"
              />

              <a href="https://lencho123.github.io/BankDash-in-reactJS/">
                <div
                  className={` ${
                    darkMode
                      ? "hover:bg-[#0000009c] bg-[#0000004c] "
                      : "bg-[#0000000b] hover:bg-[#0000004c]"
                  } absolute rounded-t-2xl top-0 left-0 h-full w-full  
           z-20 transition-all duration-500 flex justify-center items-center hover:text-[#fbf6f6c0] text-[#fbf6f600]`}
                >
                  <div className="">
                    <EyeIcon className="h-[5rem] w-[5rem] hover:text-white" />
                  </div>
                </div>
              </a>
            </div>

            <div className=" relative rounded-t-2xl basis-1/2">
              <h4
                className={`p-[1rem]  ${
                  darkMode ? " text-white p-[0.5rem]" : "text-slate-800"
                }`}
              >
                Quiz APP
              </h4>
              <Image
                src={quizapp}
                className="w-full h-full object-cover mx-auto"
                alt="Quiz App"
              />

              <a href="https://lencho123.github.io/Quiz-App01-with-React-JS/">
                <div
                  className={` ${
                    darkMode
                      ? "hover:bg-[#0000009c] bg-[#0000004c] "
                      : "bg-[#0000000b] hover:bg-[#0000004c]"
                  } absolute rounded-t-2xl top-0 left-0 h-full w-full  
           z-20 transition-all duration-500 flex justify-center items-center hover:text-[#fbf6f6c0] text-[#fbf6f600]`}
                >
                  <div className="">
                    <EyeIcon className="h-[5rem] w-[5rem] hover:text-white" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div
            className="flex sm:flex-row flex-col
           gap-[1rem] sm:gap-[2rem] overflow-hidden"
          >
            <div className=" relative rounded-t-2xl basis-1/2">
              <h4
                className={`p-[1rem]  ${
                  darkMode ? " text-white p-[0.5rem]" : "text-slate-800"
                }`}
              >
                Google Form with ReactJs
              </h4>
              <Image
                src={googleform}
                className="w-full h-full object-cover mx-auto"
                alt="Google form"
              />

              <a href="https://lencho123.github.io/Google-form-in-react/">
                <div
                  className={` ${
                    darkMode
                      ? "hover:bg-[#0000009c] bg-[#0000004c] "
                      : "bg-[#0000000b] hover:bg-[#0000004c]"
                  } absolute rounded-t-2xl top-0 left-0 h-full w-full  
           z-20 transition-all duration-500 flex justify-center items-center hover:text-[#fbf6f6c0] text-[#fbf6f600]`}
                >
                  <div className="">
                    <EyeIcon className="h-[5rem] w-[5rem] hover:text-white" />
                  </div>
                </div>
              </a>
            </div>

            <div className=" relative rounded-t-2xl basis-1/2">
              <h4
                className={`p-[1rem]  ${
                  darkMode ? " text-white p-[0.5rem]" : "text-slate-800"
                }`}
              >
                Others.
              </h4>
              <Image
                src={leetcode}
                className="w-full h-full object-cover mx-auto"
                alt="others"
              />

              <a href="https://github.com/Lencho123/A2SV-G-6-Solved-Problems">
                <div
                  className={` ${
                    darkMode
                      ? "hover:bg-[#0000009c] bg-[#0000004c] "
                      : "bg-[#0000000b] hover:bg-[#0000004c]"
                  } absolute rounded-t-2xl top-0 left-0 h-full w-full  
           z-20 transition-all duration-500 flex justify-center items-center hover:text-[#fbf6f6c0] text-[#fbf6f600]`}
                >
                  <div className="">
                    <EyeIcon className="h-[5rem] w-[5rem] hover:text-white" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
