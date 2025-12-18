import { useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [name,setName]=useState('asif')
  return (
    <div>
      <ThemeContext value={name}>
 <Navbar></Navbar>
      </ThemeContext>
   
    </div>
  );
};

export default App;