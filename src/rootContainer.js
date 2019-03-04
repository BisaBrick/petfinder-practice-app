import React from 'react';
import NavBar from './NavBar';
import SearchBar from './searchBar';
import Pets from './petApp';
import { hot } from 'react-hot-loader';
import './styles/rootContainer.scss';

class RootContainer extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <SearchBar/>
        <Pets />
      </div>
    );
  }
}
export default hot(module)(RootContainer);