import ProgressBar from "../../../components/ProgressBar";

const SummaryComponentItems = ({ fieldValue, percentage }) => {
  return (
    <>
      <div className="flex justify-between">
        <p>{fieldValue}</p>
        <span>{percentage} %</span>
      </div>
      <ProgressBar percentage={percentage} />
    </>
  );
};

export default SummaryComponentItems;
