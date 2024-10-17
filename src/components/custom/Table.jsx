import React from "react";
import tableData from "./../../data/table-data.json";

const Table = () => {
  return (
    <div className="pt-4 pb-8 w-full">
      <div className="overflow-x-auto w-full">
        <table className="min-w-[640px] sm:min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-transparent border-b-[1px] border-gray-800 text-gray-400">
              {Object.keys(tableData[0])
                .filter((key) => key !== "imgSrc" && key !== "currency")
                .map((key, index, arr) => {
                  const lastKey = index === arr.length - 1;
                  return (
                    <th
                      key={index}
                      className={`pr-2 py-2 ${
                        lastKey ? "text-right" : "text-left"
                      } font-normal whitespace-nowrap`}
                    >
                      {key}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((order) => {
              const {
                orderNumber,
                purchaseDate,
                customer,
                imgSrc,
                event,
                amount,
                currency,
              } = order;
              return (
                <tr
                  key={orderNumber}
                  className="bg-transparent border-b-[1px] border-gray-800"
                >
                  <td className="pr-2 py-5 whitespace-nowrap">{orderNumber}</td>
                  <td className="pr-2 py-4 text-gray-500 whitespace-nowrap">
                    {purchaseDate}
                  </td>
                  <td className="pr-2 py-4 whitespace-nowrap">{customer}</td>
                  <td className="pr-2 py-4 flex gap-2 whitespace-nowrap">
                    <img
                      src={imgSrc}
                      alt="Event"
                      className="rounded-full w-5 h-5"
                    />
                    {event}
                  </td>
                  <td className="pr-2 py-4 text-right whitespace-nowrap">
                    {`${currency}${amount}`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
