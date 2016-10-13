import React, { Component } from 'react';
import AppFrame from './AppFrame';

class AppWindow extends Component {
  
  render() {    
   console.log("query =  " + JSON.stringify(this.props.location.query));

    var appArgs;

    if (this.props.location.query && this.props.location.query.length >= 2)
        appArgs = { appTitle : this.props.location.query.appTitle, appUrl : decodeURIComponent(this.props.location.query.appUrl)}
    else
        appArgs = { appTitle : 'Unknown', appUrl : "https://jsfiddle.net"}            

    document.title = appArgs.appTitle;   
    return (
        <AppFrame title={appArgs.appTitle} url={appArgs.appUrl}/>       
    );
  }
}

export default AppWindow;
