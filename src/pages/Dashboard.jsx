import React from "react";
import StatusBox from "../components/dahboard/StatusBox";
import ChartBox from "../components/dahboard/ChartBox";

function Dashboard() {
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex items-center font-medium text-xl text-gray-6 mt-4">
        <p>داشبورد</p>
      </div>
      <StatusBox />
      <ChartBox/>
    </div>
  );
}

export default Dashboard;
