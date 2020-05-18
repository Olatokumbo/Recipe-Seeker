import React from  "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "../App";
import {Recipe} from "./";
const Router = () => (
    <BrowserRouter>
    <Switch>
    <Route exact path="/"
    component={App}
    />
    <Route 
    render={()=> (<h1>Page Not Found</h1>)}
    />
    </Switch>
    </BrowserRouter>
);
export default Router;