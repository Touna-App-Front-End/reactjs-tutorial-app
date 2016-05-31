'use strict';

import React from 'react';

class Button1 extends React.Component {
  render() {
    return (
      <button className="ui green button">{this.props.name}</button>
    )
  }
}

export {Button1, Button2};
