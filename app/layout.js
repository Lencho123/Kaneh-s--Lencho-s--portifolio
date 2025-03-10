"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layoutOne/Header";
import SideBar from "./components/layoutOne/SideBar";
import LayoutSetting from "./components/LayoutSetting";
import NavigationBar from "./components/Portrait/NavigationBar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import PatriatSideBar from "./components/Portrait/PatriatSideBar";
import { motion } from "framer-motion";
import { useStore } from "./context/Store/state-store";
import Portifolio from "./components/Portifolio";
import Contact from "./components/Contact";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const curPage = useStore((state) => state.curPage);
  const showSideBar = useStore((state) => state.showSideBar);
  const setShowSideBar = useStore((state) => state.setShowSideBar);
  const layoutOne = useStore((state) => state.layoutOne);
  const layoutSetting = useStore((state) => state.layoutSetting);
  const setLayoutSetting = useStore((state) => state.setLayoutSetting);
  const patriatShowSideBar = useStore((state) => state.patriatShowSideBar);
  const setPatriatShowSideBar = useStore(
    (state) => state.setPatriatShowSideBar
  );
  const darkMode = useStore((state) => state.darkMode);
  const animateSettingLayout = useStore((state) => state.animateSettingLayout);
  const pathname = usePathname();
  const isMounted = useStore((state) => state.isMounted);
  const setIsMounted = useStore((state) => state.setIsMounted);

  useEffect(() => {
    setIsMounted(true);
  });
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          darkMode && "dark-mode"
        }`}
      >
        {layoutOne ? (
          <div>
            <div
              className={`${
                darkMode && "dark-mode"
              } sticky bg-white top-0 left-0`}
            >
              <Header />
            </div>
            <div className="flex relative sm:grid sm:grid-cols-[0.2fr_0.8fr]">
              <motion.div
                key={showSideBar}
                initial={{ translateX: isMounted ? -100 : 0 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.4 }}
                className={`
                    ${
                      showSideBar
                        ? "block absolute top-0 left-0 z-30 bg-emerald-100 p-[1.5rem] rounded-br-2xl "
                        : "hidden sm:block"
                    }
                      ${
                        darkMode &&
                        "dark-mode border-b-2 border-b-slate-600 border-r-2 border-r-slate-600 sm:border-none"
                      }
                  `}
              >
                <SideBar />
              </motion.div>

              <motion.div
                key={animateSettingLayout}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={
                  layoutSetting ? "absolute z-30 top-0 right-0" : "hidden"
                }
              >
                <LayoutSetting />
              </motion.div>

              <div
                className="overflow-auto p-[1.5rem]"
                style={{ height: "calc(100vh - 4rem)" }}
                onClick={() => {
                  setShowSideBar(false);
                  setLayoutSetting(false);
                }}
              >
                <motion.div
                  key={pathname} //Force animation to re-run
                  initial={{ translateX: isMounted ? 1000 : 0 }}
                  animate={{ translateX: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {children}
                </motion.div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="sticky top-0 left-0 bg-white  z-50">
              <NavigationBar />
              {patriatShowSideBar && (
                <motion.div
                  key={patriatShowSideBar}
                  initial={{ translateX: 1000, translateY: -300 }}
                  animate={{ translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`  ${
                    darkMode && "dark-mode border-b-2 border-b-slate-600"
                  } absolute top-[2.5rem] left-0 bg-emerald-100 p-[1rem]`}
                >
                  <PatriatSideBar />
                </motion.div>
              )}
            </div>

            <div className="sticky top-[2.6rem] sm:top-[3.5rem] z-50 right-0">
              <div
                className={layoutSetting ? "absolute top-0 right-0 " : "hidden"}
              >
                <LayoutSetting />
              </div>
            </div>
            <motion.div
              key={animateSettingLayout}
              initial={{ translateY: 600 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.3 }}
              className="p-[1.5rem] flex flex-col gap-[1rem]"
              onClick={() => {
                setLayoutSetting(false);
                setPatriatShowSideBar(false);
              }}
            >
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="service">
                <Services />
              </div>
              <div className="overflow-hidden" id="portifolio">
                <Portifolio />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </motion.div>
          </div>
        )}
      </body>
    </html>
  );
}
