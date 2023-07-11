
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";

function App() {

  const [ showMenu , setShowMenu ] = useState(false)
  const changeMenuStatus = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <div className="bg-light">
      <header>
        <Header changeMenuStatus={changeMenuStatus}/>
      </header>
      <div className="flex gap-5 relative">
        <aside className={`${showMenu ? 'w-full' : 'w-0'} absolute right-0 top-0 ease-in-out duration-100 z-20 md:relative md:w-full h-screen overflow-auto max-w-[230px] shadow-sm bg-white`}>
          <Sidebar/>
        </aside>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default App;
