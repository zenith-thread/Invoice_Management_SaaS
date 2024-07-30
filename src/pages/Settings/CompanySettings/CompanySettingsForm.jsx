const CompanySettingsForm = () => {
  return (
    <div className="px-[110px] py-[40px] text-sm font-semibold">
      <form>
        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company Name:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="SCM Solutions"
          />
        </div>

        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company Address:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="House # 2127A, I-10/1 Service Road, Parallel to IJP Road"
          />
        </div>

        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company State:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="Islamabad"
          />
        </div>

        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company Province:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="Islamabad Capital Territory"
          />
        </div>

        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company Country:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="Pakistan"
          />
        </div>

        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company Email:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="bdm@scmsolutionspk.com"
          />
        </div>

        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company Phone:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="051-scmsolutions"
          />
        </div>

        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company Website:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="www.scmsolutionspk.com"
          />
        </div>

        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company Tax Number:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="1923719237123"
          />
        </div>

        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company Vat Number:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="1923719237123"
          />
        </div>

        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company Reg Number:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="SCM 1923719237123"
          />
        </div>

        <div className="flex items-center py-[15px]">
          <label className="w-[300px]">Company Zip Code:</label>
          <input
            className="px-2 py-[5px] w-[350px] outline-none rounded-lg border border-gray-300 hover:border-primaryBtn transition delay-75 ease-in-out focus:border-primaryBtn shadow-sm"
            type="text"
            value="44800"
          />
        </div>
      </form>
    </div>
  );
};

export default CompanySettingsForm;
