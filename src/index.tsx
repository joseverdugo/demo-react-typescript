import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router'
import { Hello } from "./components/Hello";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { App } from "./components/App";

ReactDOM.render(
    <Router history={hashHistory}>
       <Route path="/" component={App}>
	       <Route path="/home" component={Home}/>
	       <Route path="/about" component={About}/>
	       <Route path="/contact" component={Contact}/>
       </Route>
    </Router>,
    document.getElementById("container")
);



