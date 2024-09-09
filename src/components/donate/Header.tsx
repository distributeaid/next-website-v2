import currencyFormatter from "@/utils/currencyFormatter";

const Header = () => {
  return (
    <div className="max-w-screen-sm">
      <h1 className="font-medium uppercase text-[30px] text-navy-700 leading-[1.2]">
        Support us today, so communities are prepared for tomorrow.
      </h1>

      <div className="w-full bg-navy-400 p-1 h-[36px] flex items-center space-x-2 my-2">
        <div className="bg-navy-900 h-full w-[24%]">-</div>
        <p className="font-medium text-navy-900">24%</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-navy-700 font-medium">
          FUNDED: {currencyFormatter(2960)}
        </p>
        <p className="text-navy-700 font-medium">
          GOAL: {currencyFormatter(12000)}
        </p>
      </div>
    </div>
  );
};

export default Header;
