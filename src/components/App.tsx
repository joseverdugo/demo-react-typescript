import * as React from "react";
import { Link } from 'react-router';
import { Home } from "./Home";


export class App extends React.Component<any, {}> {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        {this.props.children  || <Home/>}
      </div>);
  }
}
