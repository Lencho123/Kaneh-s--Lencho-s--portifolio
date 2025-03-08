"use client";
import { Locate, MessageCircleReply, PhoneCallIcon } from "lucide-react";
import React from "react";
import { useStore } from "../context/Store/state-store";

const Contact = () => {
  const darkMode = useStore((state) => state.darkMode);
  return (
    <section
      className={`${
        darkMode ? "bg-slate-700" : "bg-slate-200"
      } flex-col flex  p-[1rem] w-[90vw] sm:w-full `}
    >
      <h2 className="text-3xl font-bold mb-[1rem]">Contact Me</h2>
      <h3 className="font-semibold text-xl mb-[1rem] sm:mb-[1.5rem]">
        Feel free to reach out ; I am ready to response you!
      </h3>
      <div className="flex flex-col sm:flex-row sm:justify-evenly gap-[1rem]">
        <div
          className={`  flex flex-col gap-[0.5rem] items-center justify-center   p-[1rem] rounded-lg ${
            darkMode ? "bg-slate-600" : "bg-slate-300"
          } `}
        >
          <PhoneCallIcon className="text-[#f25656] " />
          <p>Call me on</p>
          <p>+251 910-510-428</p>
        </div>

        <div
          className={`  flex flex-col gap-[0.5rem] items-center justify-center  p-[1rem] rounded-lg ${
            darkMode ? " bg-slate-600" : "bg-slate-300"
          } `}
        >
          <a href="http://google.com/maps/search/astu+on+google+map/@8.5654327,39.2946782,14z?hl=am&entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
            <Locate className="text-[#f25656] " />
          </a>
          <p>Address</p>
          <p>ASTU, Adama, Oromia</p>
        </div>
        <div
          className={`  flex flex-col gap-[0.5rem] items-center justify-center  p-[1rem] rounded-lg ${
            darkMode ? " bg-slate-600" : "bg-slate-300"
          } `}
        >
          <MessageCircleReply className="text-[#f25656] " />
          <p>Email</p>
          <p>lencholachisa11@gmail.com</p>
        </div>
      </div>
      <form action="/" method="post" className="self-center">
        <fieldset className="flex flex-col gap-[1rem] sm:gap-[1.5rem]">
          <legend className="mb-[1rem] font-semibold pt-[2rem] sm:mb-[1.5rem]">
            Leave Your message below
          </legend>
          <label htmlFor="name" required>
            Name:
            <input
              className="border-2 rounded-lg m-2 w-[50vw] sm:w-[30vw]
             focus:border-emerald-300 outline-none px-[0.5rem] py-[0.3rem] bg-slate-300 text-gray-900"
              type="text"
              id="name"
              name="name"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              className="border-2 rounded-lg m-2 w-[50vw] sm:w-[30vw]
             focus:border-emerald-300 outline-none px-[0.5rem] py-[0.3rem] bg-slate-300 text-gray-900"
              type="email"
              id="email"
              name="email"
              required
            />
          </label>

          <label htmlFor="comment">
            Comment: <br />
            <textarea
              className="border-2 rounded-lg m-2 w-[57vw] sm:w-[34vw]
             focus:border-emerald-300 outline-none px-[0.5rem] py-[0.3rem] bg-slate-300 text-gray-900"
              id="comment"
              name="comment"
              rows="4"
              cols="30"
            ></textarea>
          </label>
          <br />
          <button className="lightBtn" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default Contact;
