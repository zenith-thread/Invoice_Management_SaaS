const LoginDecor = () => {
  return (
    <div className="flex flex-col  justify-center items-center w-[50vw] bg-gray-100 text-gray-600 tracking-wide">
      <div className="w-fit mb-[100px]">
        <img
          src="/assets/img/logo.png"
          alt="Company Logo"
          height="80px"
          className="ml-[22%] mb-[10px]"
        />
        <h1 className="text-2xl font-semibold py-[60px]">
          Manage Your Company With:
        </h1>

        <div className="flex flex-col justify-center">
          <div className="flex gap-4">
            <p className="font-bold text-sm">&#10003;</p>
            <p className="text-sm font-semibold">All In One Tool</p>
          </div>
          <p className="text-sm font-semibold ml-[27px] mt-[10px]">
            Run And Scale Your Business
          </p>
        </div>

        <div className="flex flex-col justify-center mt-[30px]">
          <div className="flex gap-4">
            <p className="font-bold text-sm">&#10003;</p>
            <p className="text-sm font-semibold">
              Easily Add And Manage Your Services
            </p>
          </div>
          <p className="text-sm font-semibold ml-[27px] mt-[10px]">
            It Brings Together Your Invoice, Clients And Leads
          </p>
        </div>

        <div className="border-b w-full border-gray-200 self-center my-[40px]" />
      </div>
    </div>
  );
};

export default LoginDecor;
