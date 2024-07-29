import { NavLink } from "react-router-dom";

const Sidebarfields = ({ LinkName, linkAddress }) => {
  return (
    <NavLink
      to={linkAddress}
      className="font-semibold text-sidebarText px-5 py-2 text-sm hover:bg-primaryHover rounded-lg cursor-pointer transition ease-in-out delay-25 my-[2px]"
    >
      {LinkName}
    </NavLink>
  );
};

export default Sidebarfields;
