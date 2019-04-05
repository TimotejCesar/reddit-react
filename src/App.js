import React, { Component } from 'react';
import Posts from './components/Posts';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faArrowDown, faCommentAlt, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';

library.add([faArrowUp, faArrowDown, faCommentAlt, faShare, faBookmark]);

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        <div className="container-fluid">
          <h4>Popular posts</h4>
          <div className="row justify-content-center">
            <Posts />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
