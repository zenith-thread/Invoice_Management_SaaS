const FormInputLabels = ({ classnames, label, icon, type }) => {
  return (
    <div className={classnames}>
      <label className="text-sm font-bold text-primaryText">{label}</label>
      {icon ? (
        <div className="flex">
          {icon ? icon : null}
          <input
            type={type || "text"}
            className={`${
              icon ? "w-[85%]" : null
            } px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-r-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75`}
            name={label}
          />
        </div>
      ) : (
        <input
          type={type || "text"}
          className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
          name={label}
        />
      )}
    </div>
  );
};

export default FormInputLabels;
