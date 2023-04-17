import { useState } from "react";
import MainContent from "./components/Body/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  const [show , setShow]=useState(false)

    const  handleSidebar=()=>{
      setShow(!show);
    }

  return (
    <>
    <div className="d-flex">
    <Sidebar show={show}/>
    <MainContent className="col" handleSidebar={handleSidebar}/>
    </div>
    </>
  );
}

export default App;
