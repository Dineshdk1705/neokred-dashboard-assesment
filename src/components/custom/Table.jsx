import React from "react";
import tableData from "./../../data/table-data.json";

const Table = () => {
  return (
    <div className="pt-4 pb-8 w-full">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-transparent border-b-[1px] border-gray-800 text-gray-400">
              <th className="pr-2 py-2 text-left font-normal">Order number</th>
              <th className="pr-2 py-2 text-left font-normal">Purchase date</th>
              <th className="pr-2 py-2 text-left font-normal">Customer</th>
              <th className="pr-2 py-2 text-left font-normal">Event</th>
              <th className="pr-2 py-2 text-right font-normal">Amount</th>
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
                  <td className="pr-2 py-5">{orderNumber}</td>
                  <td className="pr-2 py-4 text-gray-500">{purchaseDate}</td>
                  <td className="pr-2 py-4">{customer}</td>
                  <td className="pr-2 py-4 flex gap-2">
                    <img
                      src={imgSrc}
                      alt="Event"
                      className="rounded-full w-5 h-5"
                    />
                    {event}
                  </td>
                  <td className="pr-2 py-4 text-right">{`${currency}${amount}`}</td>
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
