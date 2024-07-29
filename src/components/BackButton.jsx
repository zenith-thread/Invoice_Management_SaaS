import { useNavigate } from "react-router-dom";

import { MdOutlineArrowBackIos } from "react-icons/md";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page
  };

  return (
    <button
      onClick={handleBackClick}
      className="flex justify-center items-center p-2 transition delay-80 ease-in-out text-lg text-primaryText hover:text-primaryBtn"
    >
      <MdOutlineArrowBackIos />
    </button>
  );
};

export default BackButton;
