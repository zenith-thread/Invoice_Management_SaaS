import CustomButton from "../../../components/CustomButton";

import { useNavigate } from "react-router-dom";

const CurrencySettings = () => {
  const navigate = useNavigate();

  const selectChangeHandler = (e) => {
    if (e.target.value === "add-new") {
      navigate("/currencies");
    }
  };

  return (
    <div className="flex flex-col bg-white ml-[110px] w-[89%] mt-[17px] border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <h2 className="px-[40px] py-[60px] text-primaryText font-semibold text-xl">
        Money Format Settings
      </h2>
      <div className="border-b w-[93%] border-primaryBorder self-center" />
      <h2 className="px-[40px] pt-[60px] text-primaryText font-semibold text-xl">
        Default Currency
      </h2>
      <h2 className="px-[40px] pt-[10px] text-gray-400 font-semibold text-sm">
        Select Default Currency
      </h2>

      <div className="flex items-center py-[15px] px-[110px] pt-[20px] pb-[50px] text-sm font-semibold">
        <label className="w-[300px]">Currency:</label>
        <select
          className="px-2 py-[5px] w-[350px] outline-none border-b border-gray-300 hover:border-primaryBtn transition ease-in-out focus:border-primaryBtn "
          type="text"
          onChange={selectChangeHandler}
        >
          <option value="Hewo">Hewo</option>
          <option value="Hewo2">Hewo2</option>
          <option value="Hewo3">Hewo3</option>
          <option value="add-new">+ Add New Currency</option>
        </select>
      </div>

      <div className="border-b w-[93%] mb-[30px] mt-[10px] border-primaryBorder self-center" />
      <div className="px-[40px] pb-[70px]">
        <CustomButton>Save</CustomButton>
      </div>
    </div>
  );
};

export default CurrencySettings;
