import { lazy } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// common components
const AvatarMenu = lazy(() => import("./AvatarMenu"));

import DuroodShareefCounter from "./DuroodShareefCounter";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 pt-4">
      {/* LOGO */}
      <div className="h-[80px] ml-[23px]">
        <LazyLoadImage
          src="src\assets\img\logo.png"
          alt="Logo"
          className="w-full h-full"
        />
      </div>
      <DuroodShareefCounter />
      {/* Avatar Menu  */}
      <AvatarMenu />
    </div>
  );
};

export default Navbar;
