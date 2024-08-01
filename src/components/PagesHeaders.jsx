import { NavLink } from "react-router-dom";
import { lazy } from "react";

// general components
const CustomButton = lazy(() => import("../components/CustomButton"));
const BackButton = lazy(() => import("../components/BackButton"));

// custom fonts
const Plus = lazy(() => import("../customFavIcons/Plus"));

const PagesHeaders = ({ heading, linkAddress, drawer }) => {
  return (
    <div className="flex justify-between items-center mb-2 py-8 px-4 pr-4">
      <div className="flex justfiy-center items-center gap-2">
        <BackButton />
        <p className="text-primaryText font-bold text-[18px]">{heading}</p>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
          placeholder="search"
        />
        <CustomButton inverted>Refresh</CustomButton>
        {linkAddress && (
          <NavLink to={linkAddress}>
            <CustomButton>
              <Plus classnames="text-2xl font-semibold mb-[7px]" /> Create New{" "}
              {heading}
            </CustomButton>
          </NavLink>
        )}
        {drawer}
      </div>
    </div>
  );
};

export default PagesHeaders;
