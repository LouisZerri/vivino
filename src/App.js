import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
    return (
        <main>
            <BrowserRouter>
                <Switch>
                    <Route exact to="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </main>
    );
};

export default App;
