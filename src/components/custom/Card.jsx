import React from "react";

const Card = ({
  title,
  value,
  tagValue,
  isProfit,
  tagDescription,
  currency = "",
}) => {
  return (
    <div className="bg-transparent min-w-full h-32 flex items-center border-t-[1px] border-gray-700">
      <div className="flex flex-col gap-3 pl-1 pt-3">
        <h5 className="text-sm">{title}</h5>
        <h2 className="text-2xl font-semibold">{`${currency}${value}`}</h2>
        <div className="flex items-center gap-2">
          <div
            className={`px-2 py-1 rounded-md ${
              isProfit
                ? "bg-[#3ecf3c] text-[#3ecf3c]"
                : "bg-[#d174d7] text-[#d174d7]"
            } bg-opacity-20 text-xs`}
          >{`${isProfit ? "+" : "-"}${tagValue}%`}</div>
          <p className="text-xs text-gray-600">{tagDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
