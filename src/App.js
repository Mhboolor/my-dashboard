import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Tikets from "./pages/Tikets";
import Users from "./pages/Users";
import Products from "./pages/Products";
import EditProduct from "./components/products/EditProduct";

function App() {
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("login")) || false
  );
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const changeMenuStatus = () => {
    setShowMenu((prev) => !prev);
  };

  const loginHandler = () => {
    if (name === "bolori" && pass === "12345678") {
      localStorage.setItem("login", true);
      setLogin(localStorage.getItem("login"));
      navigate("/dashboard");
      setName("");
      setPass("");
    }
  };

  const exitHandler = () => {
    localStorage.setItem("login", false);
    setLogin(false);
    navigate("/register");
  };

  return login ? (
    <div className="bg-light dark:bg-[#303841]">
      <header>
        <Header changeMenuStatus={changeMenuStatus} exitHandler={exitHandler} />
      </header>
      <div className="flex gap-5 relative">
        <aside
          className={`${
            showMenu ? "w-full" : "w-0"
          } absolute right-0 top-0 ease-in-out duration-100 z-20 lg:relative lg:w-full h-screen overflow-auto max-w-[230px] shadow-sm bg-white dark:bg-[#37424c]`}
        >
          <Sidebar />
        </aside>
        <main className="flex-1 w-full p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />}/>
            <Route path="/products/:productId" element={<EditProduct/>}/>
            <Route path="/users" element={<Users />} />
            <Route path="/tikets" element={<Tikets />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  ) : (
    <Routes>
      <Route
        path="/*"
        element={
          <Register
            loginHandler={loginHandler}
            name={name}
            setName={setName}
            pass={pass}
            setPass={setPass}
          />
        }
      />
    </Routes>
  );
}

export default App;
