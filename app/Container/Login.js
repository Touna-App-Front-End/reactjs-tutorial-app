'use strict';

import React from 'react';
import Form from '../Component/Form.Component';
import { Link } from 'react-router';

class Login extends React.Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">
              用户登陆
            </div>
          </h2>
          <Form />
          <div className="ui message">
            没有账号? <Link to="register">注册</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
