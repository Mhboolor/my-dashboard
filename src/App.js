
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  return (
    <div className="bg-light">
      <header>
        <Header/>
      </header>
      <div className="flex gap-5">
        <aside className="w-full h-screen overflow-auto max-w-[230px] shadow-sm bg-white">
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
