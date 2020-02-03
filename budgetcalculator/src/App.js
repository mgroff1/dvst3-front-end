import React from "react";
import "./App.css";

import AppM from "./calcs/AppM";
import AppR from "./calcs/AppR";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div id="flex">
      <div className="monthly forms">
    
        <AppM />
      </div>

      <div className="relocate forms">
      
        <AppR />
      </div>
      {/* temporary home just to view */}
      <SignUp />
    </div>
  );
}

export default App;
