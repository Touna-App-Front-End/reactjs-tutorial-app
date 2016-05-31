'use strict';

import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <div>
        <form className="ui large form" >
          <div>
        <div className="ui stacked segment">
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon" />
              <input
type="text"
name="email"
placeholder="E-mail address" />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon" />
              <input
type="password"
name="password"
placeholder="Password" />
            </div>
          </div>
          <div className="ui fluid large teal submit button">Login</div>
        </div>
        <div className="ui error message" />
      </div>

        </form>
      </div>
    )
  }
}

export default Form;
