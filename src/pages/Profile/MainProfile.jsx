import { lazy } from "react";

import { motion } from "framer-motion";

import { RiSuitcaseFill } from "../../Utils/reactIconsExports";
import { BsPersonWorkspace } from "../../Utils/reactIconsExports";
import { MdEmail } from "../../Utils/reactIconsExports";

const CustomButton = lazy(() => import("../../components/CustomButton"));

const MainProfile = ({ renderEdit, renderUpdatePassword }) => {
  return (
    <div className="relative flex ml-[200px] pl-[40px] my-[85px] w-[1100px] h-[600px] bg-white border border-white rounded-lg transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <div className="flex flex-col w-full">
        <h2 className="text-[35px] font-bold text-primaryText pt-[40px]">
          Ahmed Raza
        </h2>
        <div className="border-b-2 border-gray-200 w-[50%] mt-[20px]" />

        <div className="flex items-center pt-[20px]">
          <RiSuitcaseFill className="text-cyan-700 w-[20px] h-[20px]" />
          <p className="pl-[20px] pr-[40px] flex-1">Admin</p>
        </div>

        <div className="flex items-start pt-[20px]">
          <BsPersonWorkspace className="text-cyan-700 mt-[2px] w-[20px] h-[20px]" />
          <p className="pl-[20px] pr-[40px] flex-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aliquam, dolores assumenda nobis cum atque esse vero ab repellat
            animi.
          </p>
        </div>

        <div className="flex items-center pt-[20px]">
          <MdEmail className="text-cyan-700 w-[20px] h-[20px]" />
          <p className="pl-[20px] pr-[40px] flex-1">ahmadpkraza@gmail.com</p>
        </div>

        <div className="absolute top-[75%] border-b-2 border-gray-200 w-[26.5%] mt-[20px]" />

        <div className="flex gap-4 absolute top-[85%] ">
          <CustomButton onClick={renderEdit}>Edit</CustomButton>
          <CustomButton inverted onClick={renderUpdatePassword}>
            Update Password
          </CustomButton>
        </div>
      </div>
      <motion.div
        whileHover={{ scale: 1.01 }}
        dragConstraints={{ left: -100, right: 100 }}
      >
        <img
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          alt="profile picture"
          className="object-cover w-[650px] translate-x-[15px] translate-y-[-18px] rounded-lg shadow-xl shadow-gray-400"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default MainProfile;
