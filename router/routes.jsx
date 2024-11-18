import { createBrowserRouter } from "react-router-dom"
import Login from "../src/pages/login/Login"
import Register from "../src/pages/register/Register"
import Home from "../src/pages/home/Home"
import Detail from "../src/pages/detail/Detail"
export const router = createBrowserRouter([
   
    
    {path:"/",element:<Login/>},
    {path:"/register",element:<Register/>},
    {path:"/shop",element:<Home/>},
    {path:"/detail/:id",element:<Detail/>}

])