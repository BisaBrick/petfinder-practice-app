import React from 'react';
import { hot } from 'react-hot-loader';
import './styles/navBar.scss';


class NavBar extends React.Component {
  render() {
    return (
      <ul className="navBar">
        <li className="navBar_link1">Logo</li>
        <li className="navBar_link2">Element 1 </li>
        <li className="navBar_link3">Element 2 </li>
        <li className="navBar_link4">Element 3 </li>
        <li className="navBar_link5">Element 4 </li>
      </ul>

    );
  }
}

export default hot(module)(NavBar);