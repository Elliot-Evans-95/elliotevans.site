import {render} from 'react-dom';
import React, { Component } from 'react';

class Content extends Component {

  render() {

    return <div className="content">
                <div className="links">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                    <i className="fa fa-codepen" aria-hidden="true"></i>
                    <i className="fa fa-github" aria-hidden="true"></i>
                </div>
                <div className="content__about">
                    <h1>hello, I'm Elliot</h1>
                    <p>something cool here</p>
                </div>
            </div>
    }
}
render(<Content/>,document.getElementById('content'));