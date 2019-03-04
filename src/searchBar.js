import React from 'react';
import { hot } from 'react-hot-loader';
import './styles/searchBar.scss';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <p className="searchBar_title">Find your dream pet</p>
      </div>
    );
  }
}

export default hot(module)(SearchBar);
