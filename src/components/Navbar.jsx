// common components
import AvatarMenu from "./AvatarMenu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* LOGO */}
      <h1 className="text-[32px]">SCM SOLUTIONS</h1>

      {/* Avatar Menu  */}
      <AvatarMenu />
    </div>
  );
};

export default Navbar;
