import React from "react";
import "./App.css";
import {Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from  "./components/LogIn";
import Home from  "./components/Home";
import Calculator from  "./components/Calculator";
import Header from "./components/Header";

const App = () => {
  return (
      <main>
        <Header />
        <Route exact path="/" render={()=> <Home />} />
        <Route exact path="/Calculator" render={props => <Calculator {...props} />} />
        <Route exact path="/LogIn" render={props => <LogIn {...props} />} />
        <Route exact path='/SignUp' render={props => <SignUp {...props}/>}/>
      </main>
  );
}

export default App;
