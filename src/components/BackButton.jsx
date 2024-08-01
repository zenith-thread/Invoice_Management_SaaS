import { useNavigate } from "react-router-dom";

import { MdOutlineArrowBackIos } from "../Utils/reactIconsExports";

const BackButton = ({ customOnClick }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleClick = customOnClick || handleBackClick;

  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center p-2 transition delay-80 ease-in-out text-lg text-primaryText hover:text-primaryBtn"
    >
      <MdOutlineArrowBackIos />
    </button>
  );
};

export default BackButton;
