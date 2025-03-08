// "use client";
// import React, { createContext, useState } from "react";

// export const Provide = createContext();

// export const SideBarProvider = ({
//   curPage,
//   setCurPage,
//   showSideBar,
//   setShowSideBar,
//   layoutOne,
//   setLayoutOne,
//   layoutSetting,
//   setLayoutSetting,
//   patriatShowSideBar,
//   setPatriatShowSideBar,
//   darkMode,
//   setDarkMode,
//   children,
// }) => {
//   // const [curPage, setCurPage] = useState('Home');
//   return (
//     <Provide.Provider
//       value={{
//         curPage: curPage,
//         setCurPage: setCurPage,
//         showSideBar: showSideBar,
//         setShowSideBar: setShowSideBar,
//         layoutOne: layoutOne,
//         setLayoutOne: setLayoutOne,
//         layoutSetting: layoutSetting,
//         setLayoutSetting: setLayoutSetting,
//         patriatShowSideBar: patriatShowSideBar,
//         setPatriatShowSideBar: setPatriatShowSideBar,
//         darkMode,
//         setDarkMode,
//       }}
//     >
//       {children}
//     </Provide.Provider>
//   );
// };
