import { useState } from "react";
import Mirror from "./components/Mirror";

const App = () => {
  const [color,setColor] = useState("red")
  const handleChangeColor = ()=>{
    setColor("blue")
  }
  return (
    <div>
      <Mirror messageColor={color}></Mirror>
      <br />
      <button className="btn btn-primary" onClick={handleChangeColor}>Change Color from Parent</button>
    
    </div>
  );
};

export default App;