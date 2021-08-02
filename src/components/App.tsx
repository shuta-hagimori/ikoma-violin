import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Access } from "./Access";
import { Header } from "./Header";
import { Home } from "./home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/access" component={Access} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
