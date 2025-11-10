import React from "react";
import Toolbar from "./Button";

const App = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <Toolbar></Toolbar>
    </div>
  );
};

export default App;
