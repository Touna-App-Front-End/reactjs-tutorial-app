'use strict';

import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui large top fixed hidden menu">
          <div className="ui container">
            <Link to="/" className="active item">首页</Link>
            <div className="right menu">
              <div className="item">
                <Link to="login" className="ui button">登陆</Link>
              </div>
              <div className="item">
                <Link to="register" className="ui primary button">注册</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
