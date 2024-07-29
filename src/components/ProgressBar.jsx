const ProgressBar = ({ percentage }) => {
  return (
    <div className="relative bg-primaryBorder h-2 w-[100%] my-[10px] rounded shadow-md">
      {/* SHOW PROGRESS ACCORDING TO THE PERCENTAGE */}
      <div
        className="absolute top-0 left-0 bg-primaryBtn h-2 rounded"
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
