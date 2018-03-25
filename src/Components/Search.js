import React, { Component } from 'react';
import '../css/Search.css';
import '../functions.js';

class Search extends Component {

  render() {
  return (
    <div className="Search-card">
      <div className="Search-bar">
        <input type ="search" name="search" placeholder="Find a Bubble!" autoComplete="on" height="100%" width="100px"/>
        <div classname="Circle">
          <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48"/>
        </div>
      </div>

      <div className="Search-results">
        <label>whahfeifnwreibnfduckx</label>
      </div>


    </div>


    );
  }
}

export default Search;
