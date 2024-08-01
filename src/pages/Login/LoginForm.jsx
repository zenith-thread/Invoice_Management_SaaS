import { lazy } from "react";

const CustomButton = lazy(() => import("../../components/CustomButton"));

const LoginForm = () => {
  return (
    <div className="flex flex-col  justify-center items-center w-[50vw] bg-white text-gray-600 tracking-wide">
      <div className="w-fit mb-[100px]">
        <h1 className="text-4xl font-bold tracking-wide">Sign In</h1>

        <div className="border-b w-full border-gray-200 self-center mt-[40px] mb-[20px]" />

        <form>
          <div className="flex flex-col items-center">
            <label className="font-bold text-sm tracking-wide self-start py-[15px]">
              Email
            </label>
            <input
              className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
              value=""
              type="email"
            />
          </div>

          <div className="flex flex-col items-center ">
            <label className="font-bold text-sm tracking-wide self-start py-[15px]">
              Password
            </label>
            <input
              className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
              value=""
              type="password"
            />
          </div>

          <div className="flex justify-between py-[20px]">
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="cursor-pointer" />
              <p className="text-sm font-bold">Remember Me</p>
            </div>
            <p className="text-sm font-semibold text-secondaryText hover:opacity-80 cursor-pointer">
              Forgot Password
            </p>
          </div>

          <CustomButton width="full">Log In</CustomButton>
        </form>

        <div className="border-b w-full border-gray-200 self-center my-[40px]" />
      </div>
    </div>
  );
};

export default LoginForm;
