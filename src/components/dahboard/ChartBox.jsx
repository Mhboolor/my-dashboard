import React from "react";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BsThreeDotsVertical } from "react-icons/bs";

function ChartBox() {
  const data = [
    {
      name: "Jan",
      revenue: 2400,
    },
    {
      name: "Feb",
      revenue: 600,
    },
    {
      name: "Mar",
      revenue: 2210,
    },
    {
      name: "Apr",
      revenue: 2290,
    },
    {
      name: "May",
      revenue: 900,
    },
    {
      name: "Jun",
      revenue: 2181,
    },
    {
      name: "Jul",
      revenue: 2500,
    },
    {
      name: "Aug",
      revenue: 2100,
    },
    {
      name: "Sep",
      revenue: 2100,
    },
    {
      name: "Otc",
      revenue: 2100,
    },
    {
      name: "Nov",
      revenue: 100,
    },
    {
      name: "Dec",
      revenue: 2100,
    },
  ];

  return (
    <div className="flex flex-col items-start gap-6 lg:flex-row">
      <div className=" p-6 bg-white shadow-sm flex flex-col rounded-sm h-full w-full lg:w-auto">
        <div className="flex items-center justify-between">
          <p>مجموع درآمد</p>
          <button>
            <BsThreeDotsVertical />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <PieChart width={150} height={150}>
            <Pie
              data={[{ value: 68 }]}
              innerRadius={60}
              outerRadius={70}
              fill="rgba(241,85,108,0.9)"
              paddingAngle={105}
            ></Pie>
          </PieChart>
          <div className="absolute flex-col flex items-center justify-center gap-2 text-gray-2">
            <p>درآمد</p>
            <p>68%</p>
          </div>
        </div>
        <div className="text-gray-2 flex flex-col items-center justify-center gap-3 my-3">
          <p className="font-semibold">تمام فروش امروز</p>
          <p className="text-gray-5 font-semibold text-3xl">$178</p>
          <p className="line-clamp-2 text-center">
            عناصر عنوان سنتی به گونه ای طراحی شده اند که در گوشت محتوای صفحه شما
            بهترین عملکرد را داشته باشند.
          </p>
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col items-center justify-center">
              <p>ماه گذشته</p>
              <p className="text-gray-5 font-semibold">$15k</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>هفته گذشته</p>
              <p className="text-gray-5 font-semibold">$1.4k</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>هدف</p>
              <p className="text-gray-5 font-semibold">$7.8k</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-6 bg-white shadow-sm flex-col rounded-sm w-full h-full gap-5">
        <div className="flex items-center justify-between w-full">
          <p>تجزیه و تحلیل فروش</p>
          <div className="text-xs bg-light rounded-sm items-center hidden sm:flex">
            <button className="p-1 px-3 rounded-sm">امروز</button>
            <button className="p-1 px-3 rounded-sm">هفتگی</button>
            <button className="bg-gray-4 p-1 px-3 text-white rounded-sm">
              ماهانه
            </button>
          </div>
        </div>
        <div className="w-full h-full">
          <ResponsiveContainer className="min-h-[345px] h-full w-full">
            <LineChart width="100%" height="100%" data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="rgb(26, 188, 156)"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
