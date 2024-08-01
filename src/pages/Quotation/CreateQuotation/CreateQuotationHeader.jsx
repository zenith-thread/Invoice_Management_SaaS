import { lazy } from "react";

const BackButton = lazy(() => import("../../../components/BackButton"));
const CustomButton = lazy(() => import("../../../components/CustomButton"));

const Plus = lazy(() => import("../../../customFavIcons/Plus"));

const CreateQuotationHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6 py-10 px-4 pr-4 border-b border-dotted border-primaryBorder">
      <div className="flex justfiy-center items-center gap-3">
        <BackButton />
        <p className="text-primaryText font-bold text-[18px]">New</p>
        <span className="px-3 py-1 border border-primaryBorder rounded-lg text-xs font-semibold shadow-sm">
          Draft
        </span>
      </div>
      <div className="flex gap-2">
        <CustomButton inverted>
          <span className="text-2xl font-semibold mb-[8px]">x</span> Cancel
        </CustomButton>
        <CustomButton>
          <Plus classnames="text-2xl font-semibold mb-[7px]" /> Save
        </CustomButton>
      </div>
    </div>
  );
};

export default CreateQuotationHeader;
