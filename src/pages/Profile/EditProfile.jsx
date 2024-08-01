import { lazy } from "react";

const CustomButton = lazy(() => import("../../components/CustomButton"));
const BackButton = lazy(() => import("../../components/BackButton"));

// react icons
// import { MdOutlineFileUpload } from "../../Utils/reactIconsExports";

const EditProfile = ({ renderEdit }) => {
  return (
    <div className="flex flex-col ml-[350px] px-[40px] my-[25px] w-[600px] h-[700px] bg-white border border-white rounded-lg transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <div className="flex justify-between pt-[50px] items-center">
        <div className="flex gap-2">
          <div className="mt-[-1px]">
            <BackButton customOnClick={renderEdit} />
          </div>
          <p className="text-xl font-semibold ">Profile</p>
        </div>
        <div className="flex gap-3">
          <CustomButton inverted>Close</CustomButton>
          <CustomButton>Save</CustomButton>
        </div>
      </div>

      <div className="border-b w-[93%] border-gray-100 self-center mt-[40px]" />

      <div className="relative group mt-[60px] w-[200px] h-[200px] left-[30%] border-4 border-gray-200 rounded-full p-1">
        <img
          src="https://bit.ly/prosper-baba"
          alt="profile image"
          className="w-full h-full object-cover rounded-full group-hover:brightness-50 transition duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition duration-300">
          <div className="flex gap-2">
            {/* <MdOutlineFileUpload className="text-xl" /> */}
            <p>Upload</p>
          </div>
        </div>
      </div>

      <div className="mt-[40px]">
        <form>
          <div className="flex items-center py-[15px] px-[70px]">
            <label className="w-[300px] text-sm font-semibold">
              First Name:
            </label>
            <input
              className="px-2 py-[5px] w-[450px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
              type="text"
              value="Ahmed"
            />
          </div>

          <div className="flex items-center py-[15px] px-[70px]">
            <label className="w-[300px] text-sm font-semibold">
              Last Name:
            </label>
            <input
              className="px-2 py-[5px] w-[450px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
              type="text"
              value="Raza"
            />
          </div>

          <div className="flex items-center py-[15px] px-[70px]">
            <label className="w-[300px] text-sm font-semibold">Email:</label>
            <input
              className="px-2 py-[5px] w-[450px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
              type="email"
              value="ahmadpkraza@gmail.com"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
