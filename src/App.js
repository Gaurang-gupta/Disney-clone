import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Detail from "./Components/Detail";

function App() {
  return (
    // 3:24:29
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
