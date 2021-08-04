import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Routes } from "./Routers/Routers";
import React from "react";

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
