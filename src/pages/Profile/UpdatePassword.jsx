import { lazy } from "react";

const CustomButton = lazy(() => import("../../components/CustomButton"));
const BackButton = lazy(() => import("../../components/BackButton"));

const UpdatePassword = ({ renderUpdatePassword }) => {
  return (
    <div className="flex flex-col ml-[350px] px-[40px] my-[35px] w-[600px] h-[450px] bg-white border border-white rounded-lg transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <div className="flex justify-between pt-[80px] items-center">
        <div className="flex gap-2">
          <div className="mt-[-1px]">
            <BackButton customOnClick={renderUpdatePassword} />
          </div>
          <p className="text-xl font-semibold ">Update Password</p>
        </div>
        <div className="flex gap-3">
          <CustomButton inverted>Close</CustomButton>
          <CustomButton>Save</CustomButton>
        </div>
      </div>

      <div className="border-b w-[93%] border-gray-100 self-center mt-[50px]" />

      <div className="mt-[50px]">
        <form>
          <div className="flex items-center py-[15px] px-[70px]">
            <label className="w-[300px] text-sm font-semibold">
              New Password:
            </label>
            <input
              className="px-2 py-[5px] w-[450px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
              type="password"
              value=""
            />
          </div>

          <div className="flex items-center py-[15px] px-[70px]">
            <label className="w-[300px] text-sm font-semibold">
              Confirm Password:
            </label>
            <input
              className="px-2 py-[5px] w-[450px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
              type="password"
              value=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
