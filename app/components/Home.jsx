"use client";
import React from "react";
import background1 from "../../public/background1.webp";
import { useStore } from "../context/Store/state-store";
import Link from "next/link";

const Home = () => {
  const layoutOne = useStore((state) => state.layoutOne);
  const setCurPage = useStore((state) => state.setCurPage);

  return (
    <div
      style={{
        backgroundImage: `url(${background1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <section className="relative px-[1.5rem] flex items-center justify-center h-[80vh] w-[90vw] sm:w-[60vw]">
        <div>
          <h3 className="text-5xl p-[0.7rem] rounded-md bg-[#2f2d2d87]  text-[#ff4141] sm:text-3xl  mt-[1.5rem] font-bold ">
            Hello! <br /> My name is <span> </span>
            <span className=" font-extrabold text-[#17ff36]  italic font-[sarif]">
              Lencho
            </span>
          </h3>

          <h4 className="h4 text-5xl font-bold text-[#ff4141] m-[2rem] pl-[2rem] rounded-md bg-[#2f2d2d87] self-center">
            I am Front-End Developer...
          </h4>

          <Link
            href="/pages/about"
            onClick={() => setCurPage("About")}
            className={`lightBtn m-[2rem] ${layoutOne ? "" : "hidden"}`}
          >
            Know More <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
