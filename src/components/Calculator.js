import React from "react";
import AppM from "../calcs/AppM";
import AppR from "../calcs/AppR";

const Calculator = () => {
  return (
    <div id="flex">
      <div className="monthly forms">
    
        <AppM />
      </div>

      <div className="relocate forms">
      
        <AppR />
      </div>
      </div>
  );
}

export default Calculator;