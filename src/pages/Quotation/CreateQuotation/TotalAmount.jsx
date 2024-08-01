const TotalAmount = ({ column, amount, heading, inverted }) => {
  const styles = {
    inverted: "text-white",
  };

  return (
    <div
      className={`flex ${
        column ? "flex flex-col" : "items-center gap-2 px-3 py-1 self-end"
      } rounded-lg ${inverted && "bg-cyan-700"}`}
    >
      <h2
        className={`font-bold text-md text-center ${
          inverted ? styles.inverted : "text-gray-500"
        }`}
      >
        {heading}
      </h2>
      <div
        className={`flex gap-2 justify-center items-center text-center ${
          inverted ? styles.inverted : "text-primaryText"
        }`}
      >
        <span className="text-2xl font-semibold mb-[8px]">Rs</span>
        <p
          className={`font-bold  text-lg ${
            inverted ? styles.inverted : "text-primaryText"
          }`}
        >
          {amount}
        </p>
      </div>
    </div>
  );
};

export default TotalAmount;
