"use client";
import { MenuIcon, Settings } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useStore } from "@/app/context/Store/state-store";
import { motion } from "framer-motion";

const Header = () => {
  const curPage = useStore((state) => state.curPage);
  const showSideBar = useStore((state) => state.showSideBar);
  const setShowSideBar = useStore((state) => state.setShowSideBar);
  const layoutSetting = useStore((state) => state.layoutSetting);
  const setLayoutSetting = useStore((state) => state.setLayoutSetting);
  const darkMode = useStore((state) => state.darkMode);
  const setAnimateSettingLayout = useStore(
    (state) => state.setAnimateSettingLayout
  );
  const animateSettingLayout = useStore((state) => state.animateSettingLayout);
  return (
    <section className={darkMode ? "dark-theme header-dark" : "header-light"}>
      <div className="flex items-center gap-[0.5rem]">
        <Image
          className="hidden sm:block"
          src={logo}
          alt="Description of image"
          width={40}
        />
        <MenuIcon
          className="sm:hidden"
          onClick={() => {
            if (showSideBar) {
              setShowSideBar(false);
            } else {
              setShowSideBar(true);
            }
          }}
        />
        <span className="hidden sm: block">Lencho</span>
      </div>

      <div>
        <p>{curPage}</p>
      </div>

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
            if (animateSettingLayout === 1) {
              setAnimateSettingLayout(0);
            } else {
              setAnimateSettingLayout(1);
            }
          }}
        />
      </motion.div>
    </section>
  );
};

export default Header;
