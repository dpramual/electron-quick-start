import React, { Component } from 'react';
import WindowIpc from './windowIpc';
import './AppFrame.css';


export default class AppFrame extends Component {

  constructor(props) {
    super(props)
    this.state = {
        showRestoreBtn: false 
    }
  }


  componentWillMount() {
      console.log('componentWillMount')
  }

  handleMinimizeClick() {
      console.log('On Minimized');
      WindowIpc.minimize();
  }

  handleMaximizeClick() {
    console.log('On maximized');
    this.setState({ 
      showRestoreBtn : true 
    });

    WindowIpc.maximize();
  }

  handleCloseClick() {
    console.log('on close');
    WindowIpc.close();
  }

  handleRestoreClick() {
    console.log('on restore');
    this.setState({ showRestoreBtn : false });
    WindowIpc.restore();
  }

  render() {
    console.log("rendering app title = " + this.props.title + " url = " + this.props.url);
    return (
      <div  className="border outer-border" >
        <div className="re-sizable display-show north" id="_resizearea_n"></div>
        <div className="re-sizable display-show east" id="_resizearea_e"></div>
        <div className="re-sizable display-show south" id="_resizearea_s"></div>
        <div className="re-sizable display-show west" id="_resizearea_w"></div>
        <div className="re-sizable display-show north-west" id="_resizearea_nw"></div>
        <div className="re-sizable display-show north-east" id="_resizearea_ne"></div>
        <div className="re-sizable display-show south-west" id="_resizearea_sw"></div>
        <div className="re-sizable display-show south-east" id="_resizearea_se"></div>
        <div className="border active">
              <div className="border">
                <div className="border inner-border">
                  <div className="titlebar">
                    <div className="draggable">
                      <div className="active" id="_AppWindowDraggableArea">                                        
                        <span className="titletext">{this.props.title}</span>
                      </div>
                      <div id="sysmenupanel">
                        <div>
                          <button type="button" id="sysmenu_minBtn" onClick={this.handleMinimizeClick.bind(this)} ><span /></button>
                          { !this.state.showRestoreBtn ?
                              <button type="button" id="sysmenu_maxBtn" onClick={this.handleMaximizeClick.bind(this)} ><span /></button> :
                              <button type="button" id="sysmenu_restoreBtn" onClick={this.handleRestoreClick.bind(this)} ><span /></button>
                          }
                          <button type="button" id="sysmenu_closeBtn" onClick={this.handleCloseClick.bind(this)} ><span id="closeImg" /></button>
                        </div>
                      </div>
                    </div>                                    
                  </div>
                  <iframe id="appContent" className="appContent" src={this.props.url}/>                                    
              </div>
            </div>
          </div>
        </div>
      
          
      ) ;
  }
}

