import React from "react";

const orders = [
  {
    orderNumber: 3000,
    purchaseDate: "May 9, 2024",
    customer: "Leslie Alexander",
    event: "Bear Hug: Live in Concert",
    imgSrc: "/images/pic1.jpg",
    amount: "80.00",

    currency: "US$",
  },
  {
    orderNumber: 3001,
    purchaseDate: "May 5, 2024",
    customer: "Michael Foster",
    event: "Six Fingers — DJ Set",
    imgSrc: "/images/pic2.jpg",
    amount: "299.00",
    currency: "US$",
  },
  {
    orderNumber: 3002,
    purchaseDate: "Apr 28, 2024",
    customer: "Dries Vincent",
    event: "We All Look The Same",
    imgSrc: "/images/pic3.jpg",
    amount: "150.00",
    currency: "US$",
  },
  {
    orderNumber: 3003,
    purchaseDate: "Apr 23, 2024",
    customer: "Lindsay Walton",
    event: "Bear Hug: Live in Concert",
    imgSrc: "/images/pic1.jpg",
    amount: "80.00",

    currency: "US$",
  },
  {
    orderNumber: 3004,
    purchaseDate: "Apr 18, 2024",
    customer: "Courtney Henry",
    event: "Viking People",
    imgSrc: "/images/pic2.jpg",
    amount: "114.99",
    currency: "US$",
  },
  {
    orderNumber: 3005,
    purchaseDate: "Apr 14, 2024",
    customer: "Tom Cook",
    event: "Six Fingers — DJ Set",
    imgSrc: "/images/pic3.jpg",
    amount: "299.00",
    currency: "US$",
  },
  {
    orderNumber: 3006,
    purchaseDate: "Apr 10, 2024",
    customer: "Whitney Francis",
    event: "We All Look The Same",
    imgSrc: "/images/pic1.jpg",
    amount: "150.00",
    currency: "US$",
  },
  {
    orderNumber: 3007,
    purchaseDate: "May 9, 2024",
    customer: "Leslie Alexander",
    event: "Bear Hug: Live in Concert",
    imgSrc: "/images/pic2.jpg",
    amount: "80.00",

    currency: "US$",
  },
  {
    orderNumber: 3008,
    purchaseDate: "May 5, 2024",
    customer: "Michael Foster",
    event: "Six Fingers — DJ Set",
    imgSrc: "/images/pic3.jpg",
    amount: "299.00",
    currency: "US$",
  },
  {
    orderNumber: 3009,
    purchaseDate: "Apr 28, 2024",
    customer: "Dries Vincent",
    event: "We All Look The Same",
    imgSrc: "/images/pic1.jpg",
    amount: "150.00",
    currency: "US$",
  },
  {
    orderNumber: 3010,
    purchaseDate: "Apr 23, 2024",
    customer: "Lindsay Walton",
    event: "Bear Hug: Live in Concert",
    imgSrc: "/images/pic2.jpg",
    amount: "80.00",

    currency: "US$",
  },
  {
    orderNumber: 3011,
    purchaseDate: "Apr 18, 2024",
    customer: "Courtney Henry",
    event: "Viking People",
    imgSrc: "/images/pic3.jpg",
    amount: "114.99",
    currency: "US$",
  },
  {
    orderNumber: 3012,
    purchaseDate: "Apr 14, 2024",
    customer: "Tom Cook",
    event: "Six Fingers — DJ Set",
    imgSrc: "/images/pic1.jpg",
    amount: "299.00",
    currency: "US$",
  },
  {
    orderNumber: 3013,
    purchaseDate: "Apr 10, 2024",
    customer: "Whitney Francis",
    event: "We All Look The Same",
    imgSrc: "/images/pic2.jpg",
    amount: "150.00",
    currency: "US$",
  },
];
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
            {orders.map((order) => {
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
