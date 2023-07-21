import React, { useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import SearchBox from "./SearchBox";
import Tiket from "./Tiket";
import { useGetTiketsQuery } from "../../api/apiSlice";
import Loading from "../Loading";
import AddTiket from "./AddTiket";

function TiketsList() {
  const [showAdd, setShowAdd] = useState(false);

  const { data: tikets, isLoading, isError, isSuccess } = useGetTiketsQuery();
  
  const [query, setQuery] = useState("");
  const [filteredTikets, setFilteredTikets] = useState([]);

  const changeShow = () => {
    setShowAdd((prev) => !prev);
  };

  const searchTiket = (e) => {
    setQuery(e);
    const searchedTikets = tikets.filter((tiket) =>
    tiket.name.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredTikets(searchedTikets);
  };

  useEffect(() => {
    setFilteredTikets(tikets || []);
  }, []);

  return (
    <div className="bg-white dark:bg-[#36404a] shadow-sm rounded-sm p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-xl text-gray-6 dark:text-[#acbfd2]">مدیریت تیکت ها</p>
        <button
          className="flex items-center rounded-md py-1 px-2 bg-[#4a81d4] text-white gap-2"
          onClick={changeShow}
        >
          <MdAddCircleOutline />
          تیکت زدن
        </button>
      </div>
      <SearchBox searchTiket={searchTiket} query={query}/>
      <div className="w-full overflow-x-scroll md:overflow-auto">
        <table className="text-sm text-gray-4 text-justify w-[900px] md:w-full">
          <thead className="border-b dark:border-[#424e5a] dark:text-[#94a0ad]">
            <tr>
              <th className="p-3">شناسه</th>
              <th className="p-3">ارسال شده توسط</th>
              <th className="p-3">موضوع</th>
              <th className="p-3">اولویت</th>
              <th className="p-3">وضعیت</th>
              <th className="p-3">تاریخ ایجاد</th>
              <th className="p-3">انقضا</th>
              <th className="p-3">بازخورد</th>
            </tr>
          </thead>
          <tbody className=" divide-y dark:divide-[#424e5a]">
            {isError ? (
              <p>خطا در هنگام دریافت اطلاعات از سرور</p>
            ) : isLoading ? (
              <Loading />
            ) : isSuccess ? (
              filteredTikets.length ? (
                filteredTikets.map((tiket) => <Tiket {...tiket} key={tiket.id} />)
              ) : (
                tikets.map((tiket) => <Tiket {...tiket} key={tiket.id} />)
              )
            ) : null}
          </tbody>
        </table>
      </div>
      {showAdd && <AddTiket changeShow={changeShow} />}
    </div>
  );
}

export default TiketsList;
