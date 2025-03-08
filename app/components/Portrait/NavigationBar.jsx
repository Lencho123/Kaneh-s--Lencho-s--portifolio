"use client";
import React, { useContext } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { MenuIcon, Settings } from "lucide-react";
import { useStore } from "@/app/context/Store/state-store";
import { motion } from "framer-motion";
const NavigationBar = () => {
  const curPage = useStore((state) => state.curPage);
  const layoutSetting = useStore((state) => state.layoutSetting);
  const setLayoutSetting = useStore((state) => state.setLayoutSetting);
  const patriatShowSideBar = useStore((state) => state.patriatShowSideBar);
  const setPatriatShowSideBar = useStore(
    (state) => state.setPatriatShowSideBar
  );
  const darkMode = useStore((state) => state.darkMode);

  return (
    <section
      className={`${darkMode ? "dark-mode header-dark" : "header-light"} `}
    >
      <div className="flex items-center gap-[0.5rem] sm:ml-[1rem] ml-[0.7rem]">
        <Image
          className="hidden sm:block"
          src={logo}
          alt="Description of image"
          width={40}
        />
        <MenuIcon
          className="sm:hidden"
          onClick={() => {
            if (patriatShowSideBar) {
              setPatriatShowSideBar(false);
            } else {
              setPatriatShowSideBar(true);
            }
          }}
        />

        <a className="hidden sm:block" href="#home">
          Home
        </a>
      </div>

      <a className="hidden sm:block" href="#about">
        About
      </a>
      <a className="hidden sm:block" href="#service">
        Service
      </a>
      <a className="hidden sm:block" href="#portifolio">
        Portifolio
      </a>
      <a className="hidden sm:block" href="#contact">
        Contact
      </a>
      <span className="sm:hidden">{curPage}</span>

      <motion.div
        className="glow"
        animate={{
          rotate: 360, // Rotate 360 degrees
        }}
        transition={{
          repeat: Infinity, // Infinite loop
          repeatType: "loop", // Looping behavior
          duration: 2, // Duration of one complete rotation
          ease: "linear", // Smooth, continuous rotation
        }}
      >
        <Settings
          onClick={() => {
            if (layoutSetting) {
              setLayoutSetting(false);
            } else {
              setLayoutSetting(true);
            }
          }}
        />
      </motion.div>
    </section>
  );
};

export default NavigationBar;
