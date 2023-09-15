import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";


const routes = createBrowserRouter([
    {
        path:'/',
        element: <h1 className="text-blue-600">Hello, Foodify KitchenBall!</h1>,
        errorElement:<ErrorPage />
    }
])

export default routes;