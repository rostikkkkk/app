import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import NotFound from "../pages/NotFound/NotFound";


export const router = createBrowserRouter([
{
    path: "/",
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
        {
            index: true,
            element: <Home/>
        }
    ]
}
])