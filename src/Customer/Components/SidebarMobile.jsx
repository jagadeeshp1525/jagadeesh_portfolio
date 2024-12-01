import React, { useContext } from "react";
import Navbar from "./Navbar";
import { AppContext } from "../../Utilities/Context.jsx";

const SidebarMobile = () => {
  const { customClass, setCustomClass } = useContext(AppContext);
  const str = `${customClass} sidebar hidden left-0 top-0 w-[80%] bg-[#05003B] z-30`;

  return (
    <div>
      <div className={str}>
        <Navbar />
      </div>
      <div
        className={`hidden ${
          customClass == "sidebarMobile" ? "sidebar-overlay" : ""
        }`}
        onClick={() => setCustomClass(false)}
      ></div>
    </div>
  );
};

export default SidebarMobile;
