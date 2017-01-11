import {render} from 'react-dom';
import React, { Component } from 'react';

class Footer extends Component {

  render() {

    return <div className="footer">
                <div className="footer__contents">
                    <h3 className="footer__contents--madeby">
                        made by: Elliot Evans with the help of
                        <span className="sr-only"> coffee </span>
                        <i className="fa fa-coffee" aria-hidden="true"></i>
                        &
                        <span className="sr-only"> music</span>
                        <i className="fa fa-headphones" aria-hidden="true"></i>
                    </h3>
                    <h3 className="footer__contents--cookies">this site uses cookies
                        <i className="fa fa-cookies" aria-hidden="false"></i>
                    </h3>
                </div>
            </div>
    }
}
render(<Footer/>,document.getElementById('footer'));
