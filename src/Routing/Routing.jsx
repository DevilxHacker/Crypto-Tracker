import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail"; 
import MainLayout from "../Pages/Layout";
function Routing() {

    return (


        
             <Routes>
            <Route path="/" element={<MainLayout />} >

                <Route index element={<Home />} />
                <Route path="/details/:coinId" element={<Detail />} />

            </Route>
            
        </Routes>
    )
}

export default Routing;