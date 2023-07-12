import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import Tikets from "../pages/Tikets";
import Users from "../pages/Users";
import App from "../App";

export const router = createBrowserRouter([
    {path : "/" , element : <App/> , errorElement : <NotFound/> , children: [
        {path : '/' , element : <Dashboard/>},
        {path : '/products' , element : <Products/>},
        {path : '/users' , element : <Users/>},
        {path : '/tikets' , element : <Tikets/>},
    ]},
])