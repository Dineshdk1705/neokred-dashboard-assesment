import Card from "./custom/Card";
import Dropdown from "./custom/Dropdown";
import Table from "./custom/Table";

const cardData = [
  {
    title: "Total revenue",
    value: "2.6M",
    tagValue: 4.5,
    isProfit: true,
    currency: "$",
    tagDescription: "from last week",
  },
  {
    title: "Average order value",
    value: "455",
    tagValue: 0.5,
    isProfit: false,
    currency: "$",
    tagDescription: "from last week",
  },
  {
    title: "Total sold",
    value: "5,888",
    tagValue: 4.5,
    tagColor: "44b342",
    isProfit: true,
    tagDescription: "from last week",
  },
  {
    title: "Pageviews",
    value: "823,067",
    tagValue: 21.2,
    tagColor: "44b342",
    isProfit: true,
    tagDescription: "from last week",
  },
];

const Dashboard = () => {
  return (
    <div
      className="lg:ml-64 mt-[2.8rem] lg:mt-0 px-6 lg:px-12 pt-11 h-screen bg-[#141414]"
      style={{ scrollBehavior: "smooth" }}
    >
      <h2 className="font-bold">Good afternoon, Dinesh</h2>

      <div className="flex items-end justify-between mt-12 mb-4">
        <div className="text-sm">Overview</div>
        <Dropdown />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cardData.map((card, index) => {
          const { title, value, currency, tagValue, isProfit, tagDescription } =
            card;
          return (
            <Card
              key={index}
              title={title}
              value={value}
              currency={currency}
              tagValue={tagValue}
              isProfit={isProfit}
              tagDescription={tagDescription}
            />
          );
        })}
      </div>

      <div className="mt-16 w-full max-w-full overflow-x-auto">
        <h4 className="text-sm mb-4">Recent orders</h4>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
