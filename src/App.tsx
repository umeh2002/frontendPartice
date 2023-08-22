import { RouterProvider } from "react-router-dom";
import { Mainrouter } from "./Router/Mainrouter";

const app =() =>{
  return(
    <RouterProvider router={Mainrouter}/>
  )
}

export default app