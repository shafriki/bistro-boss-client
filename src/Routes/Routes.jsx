import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <h1>Error Page</h1>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
        }
      ]
    },
  ]);