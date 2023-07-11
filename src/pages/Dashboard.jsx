import React from "react";
import StatusBox from "../components/dahboard/StatusBox";
import ChartBox from "../components/dahboard/ChartBox";
import BestUsers from "../components/dahboard/BestUsers";
import RevenueHistory from "../components/dahboard/RevenueHistory";
import HeaderPages from "../components/HeaderPages";

function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <HeaderPages title={"داشبورد"} address={"داشبورد"}/>
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
