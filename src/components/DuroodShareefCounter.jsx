import { useState, useEffect } from "react";

import { motion, spring } from "framer-motion";

const DuroodShareefCounter = () => {
  const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem("DuroodCounter");
    return savedCounter ? parseInt(savedCounter, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("DuroodCounter", counter);
  }, [counter]);

  const counterHandler = () => {
    counter > 9998 ? setCounter(0) : setCounter((prev) => prev + 1);
  };

  const resetCounterHandler = () => {
    setCounter(0);
  };

  return (
    <motion.div
      className="relative h-[80px] w-[70px] bg-cyan-600 rounded-xl cursor-pointer"
      whileHover={{ scale: 2, y: 40 }}
      transition={{ type: spring }}
    >
      <div className="relative inset-[5px] h-[70px] w-[60px] rounded-xl bg-gray-900">
        <div className="absolute left-[5px] top-[4px] h-[28px] w-[50px] rounded-xl bg-green-100 shadow-inner shadow-gray-400">
          <p className="px-[7px] py-[2px]">{counter}</p>
        </div>
        <motion.div
          onClick={counterHandler}
          className="absolute left-[15px] top-[35px] h-[30px] w-[30px] rounded-full bg-cyan-600 shadow-md shadow-black"
          whileTap={{ scale: 0.9 }}
        />
        <motion.div
          onClick={resetCounterHandler}
          className="absolute left-[46px] top-[37px] h-[5px] w-[10px] rounded-full bg-gray-200 shadow-md shadow-black"
          whileTap={{ scale: 0.9 }}
        />
        <p className="absolute left-[47.5px] top-[43px] h-[5px] w-[10px] rounded-full text-white font-bold text-[3px]">
          Reset
        </p>
      </div>
    </motion.div>
  );
};

export default DuroodShareefCounter;
