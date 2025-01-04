import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <h1>Error Page</h1>,
      children: [
        {
            
        }
      ]
    },
  ]);