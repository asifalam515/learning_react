import { useState } from "react";

const Mirror = ({messageColor}) => {
    const [color,setColor] = useState(messageColor)
    const handleChangeColor=()=>{
    setColor("red")
    }
    return (
        <div style={{color:color}}>
            hello world!
              <br />
      <button onClick={handleChangeColor}>Change Color from child</button>
        </div>
    );
};

export default Mirror;