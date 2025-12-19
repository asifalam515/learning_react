import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [name,setName]=useState('asif')
  return (
    <div>
      <ThemeContext value={name}>
 <Navbar></Navbar>
 <Footer></Footer>
      </ThemeContext>
   
    </div>
  );
};

export default App;