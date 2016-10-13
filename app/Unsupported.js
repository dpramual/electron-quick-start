import React, { Component } from 'react';
import { Link } from 'react-router';

class UnsupportedApp extends Component {
  
  constructor() {
    super();
  }

  _handleClick() {
    console.log("Handle on click");
  }
  
  render() {    
    console.log("Rendering Unsupported App");
    return (
        <div>
          <h2>Unsupported Application</h2>           
            <div>
              <Link to="/">
                Go Home
              </Link>
            </div>
            <button type="button" id="testClick" onClick={this._handleClick.bind(this)}>Click Me</button>
        </div>
        
    );
  }
}

export default UnsupportedApp;
