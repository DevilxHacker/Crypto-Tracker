
import { useEffect } from "react";
import Routing from "./Routing/Routing";



function App() {

    useEffect(() => {
    document.documentElement.setAttribute("data-theme", "forest");
  }, []);

  return(
    <Routing/>
  )
 
}

export default App;
