import { NavLink } from "react-router-dom";

const Sidebarfields = ({ LinkName, linkAddress }) => {
  return (
    <NavLink
      to={linkAddress}
      className={({ isActive }) =>
        `font-semibold px-5 py-2 text-sm rounded-lg cursor-pointer transition ease-in-out my-[2px] ${
          isActive
            ? "text-secondaryText bg-[#E6EFFF]"
            : "text-sidebarText hover:bg-primaryHover"
        }`
      }
    >
      {LinkName}
    </NavLink>
  );
};

export default Sidebarfields;
