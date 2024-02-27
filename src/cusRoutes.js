import { Route,Routes } from "react-router-dom";
import Userdetails from "./userdeatails";
function CustomRoutes() {
    return(
        <Routes>
          <Route path='/college/:name?' element={<Userdetails></Userdetails>} ></Route>  
        </Routes>
    )
    
}
export  default CustomRoutes;