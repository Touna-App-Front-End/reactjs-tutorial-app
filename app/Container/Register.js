'use strict';

import React from 'react';
import Form from '../Component/Form.Component';
import { Link } from 'react-router';

class Register extends React.Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">
              用户注册
            </div>
          </h2>
          <Form />
          <div className="ui message">
            已有账号? <Link to="register">登陆</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
