import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import Tikets from "../pages/Tikets";
import Users from "../pages/Users";
import App from "../App";
import EditProduct from "../components/products/EditProduct";

export const router = createBrowserRouter([
    {path : "/" , element : <App/> , errorElement : <NotFound/> , children: [
        {path : '/' , element : <Dashboard/>},
        {path : '/products' , element : <Products/>},
        {path : '/products/:productId' , element : <EditProduct/>},
        {path : '/users' , element : <Users/>},
        {path : '/tikets' , element : <Tikets/>},
    ]},
])