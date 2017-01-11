import {render} from 'react-dom';
import React, { Component } from 'react';

class Header extends Component {

  render() {

    return <div className="header">
              <div className="nav-bar__logo">
                <img src="https://facebook.github.io/react/img/logo_og.png" className="logo"/>
              </div> 
              <div className="nav-bar__menu">
                  <div className="nav-bar__menu--items">
                      <h1>about</h1>
                      <h1>work</h1>
                      <h1>lab</h1>
                      <h1>contact</h1>
                  </div>
              </div>
          </div>
    }
}
render(<Header/>,document.getElementById('header'));
