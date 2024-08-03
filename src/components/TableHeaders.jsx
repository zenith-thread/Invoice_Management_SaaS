const TableHeaders = ({ classnames, columnName }) => {
  return (
    <th
      className={`${
        classnames ? classnames : "min-w-[150px] max-w-[150px]"
      } text-center bg-[#FAFAFA] px-[10px] py-[8px] text-sm font-bold text-gray-600 border border-separate border-gray-200`}
    >
      {columnName}
    </th>
  );
};

export default TableHeaders;
