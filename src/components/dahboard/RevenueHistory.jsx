import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useGetRevenueHistoryQuery } from "../../api/apiSlice";
import Revenue from "./Revenue";
import Loading from "../Loading";

function RevenueHistory() {
  const {
    data: revenues,
    isLoading,
    isError,
    isSuccess,
  } = useGetRevenueHistoryQuery();

  return (
    <div className="bg-white shadow-sm rounded-sm p-6 flex flex-col gap-5 flex-1 w-full h-full overflow-hidden">
      <div className="flex items-center justify-between">
        <p>سابقه درآمد</p>
        <button>
          <BsThreeDotsVertical />
        </button>
      </div>
      <div className="w-full overflow-x-scroll lg:overflow-auto">
        <table className="rounded-sm w-[640px] sm:w-full">
          <thead className="bg-table-light text-sm text-gray-5 font-bold text-justify">
            <tr>
              <th className="p-3">بازارها</th>
              <th className="p-3">تاریخ</th>
              <th className="p-3">پرداخت ها</th>
              <th className="p-3">وضعیت</th>
              <th className="p-3">ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {isError ? (
              <p>خطا در هنگام دریافت اطلاعات از سرور</p>
            ) : isLoading ? (
              <Loading />
            ) : isSuccess ? (
              revenues.map((revenue) => <Revenue {...revenue} key={revenue.id} />)
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RevenueHistory;
