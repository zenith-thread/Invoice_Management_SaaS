import { NavLink } from "react-router-dom";

// chakraUI components
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Avatar,
} from "../Utils/chakraUIExports";

// react icons
import { BsPerson } from "../Utils/reactIconsExports";
import { IoSettingsOutline } from "../Utils/reactIconsExports";
import { RiLogoutCircleRLine } from "../Utils/reactIconsExports";

const AvatarMenu = () => {
  return (
    <Menu>
      <MenuButton>
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          className="shadow-md shadow-blue-100"
          LazyLoadImage
        />
      </MenuButton>
      <MenuList className="px-1">
        <MenuGroup>
          <NavLink>
            <MenuItem>
              <div className="flex gap-2">
                <div className="mx-2">
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    className="shadow-md shadow-blue-100"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="text-sm font-semibold py-1">
                    <p>Ahmed Raza</p>
                    <p>ahmadpkraza@gmail.com</p>
                  </div>
                  <span className="px-2 py-[2px] border rounded-md bg-yellow-100 border-orange-400 text-orange-400 w-max text-xs font-bold">
                    Account Owner
                  </span>
                </div>
              </div>
            </MenuItem>
          </NavLink>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <NavLink to="/profile">
            <MenuItem>
              <div className="flex items-center gap-2 text-sm font-semibold py-1">
                <BsPerson className="font-semibold" />
                <p>Profile Settings</p>
              </div>
            </MenuItem>
          </NavLink>
          <NavLink to="/settings">
            <MenuItem>
              <div className="flex items-center gap-2 text-sm font-semibold py-1">
                <IoSettingsOutline className="font-semibold" />
                <p>Settings</p>
              </div>
            </MenuItem>
          </NavLink>
        </MenuGroup>
        <MenuDivider />
        <NavLink>
          <MenuItem>
            <div className="flex items-center gap-2 text-sm font-semibold py-1">
              <RiLogoutCircleRLine className="font-semibold" />
              <p>Logout</p>
            </div>
          </MenuItem>
        </NavLink>
      </MenuList>
    </Menu>
  );
};

export default AvatarMenu;
