
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <div className="flex">
        <aside className="w-full max-w-[240px] shadow-sm bg-white">
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
