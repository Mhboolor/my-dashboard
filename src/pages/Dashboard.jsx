import React from "react";
import StatusBox from "../components/dahboard/StatusBox";
import ChartBox from "../components/dahboard/ChartBox";
import BestUsers from "../components/dahboard/BestUsers";
import RevenueHistory from "../components/dahboard/RevenueHistory";

function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center font-medium text-xl text-gray-6 mt-4">
        <p>داشبورد</p>
      </div>
      <StatusBox />
      <ChartBox/>
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <BestUsers/>
        <RevenueHistory/>
      </div>
    </div>
  );
}

export default Dashboard;
