import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import Homescreen from "../Components/pages/Homescreen";
import Register from "../Components/pages/Register";
export const Mainrouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
          {
            index:true,
            element:<Homescreen/>
          },
          
          {
            path:"/Register",
            element:<Register/>,
          }
        ]
    }
])