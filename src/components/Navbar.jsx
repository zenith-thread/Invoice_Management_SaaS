import { lazy } from "react";

// common components
import AvatarMenu from "./AvatarMenu";

const DuroodShareefCounter = lazy(() => import("./DuroodShareefCounter"));

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 pt-4">
      {/* LOGO */}
      <div className="h-[80px] ml-[23px]">
        <img
          src="src\assets\img\logo.png"
          alt="Logo"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <DuroodShareefCounter />
      {/* Avatar Menu  */}
      <AvatarMenu />
    </div>
  );
};

export default Navbar;
