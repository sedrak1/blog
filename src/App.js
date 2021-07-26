import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './App.css';
import { Routes } from "./Routers/Routers";
import React from 'react';
// import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <nav>
        

        <Switch>
          
          {Object.values(Routes).map((fn) => {
            const { url, component } = fn();

            return <Route exact path={url} component={component} />;
          })}
        </Switch>
      </nav>
    </Router>
  );
}

export default App;
