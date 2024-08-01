const CustomButton = ({ onClick, inverted, icon, width, children }) => {
  const colorClasses = {
    primary: "bg-secondaryText text-white hover:opacity-80",
    secondary:
      "bg-white border border-primaryHover text-primaryText hover:border-primaryBtn hover:text-primaryBtn",
  };

  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-2 text-center font-semibold text-sm ${
        width ? `w-${width}` : "min-w-[100px] max-h-[33px]"
      } rounded-lg transition delay-74 ease-in-out shadow-sm ${
        inverted ? colorClasses.secondary : colorClasses.primary
      }`}
      onClick={onClick}
    >
      {icon ? <span className="items-center">{icon}</span> : null}
      {children}
    </button>
  );
};

export default CustomButton;
