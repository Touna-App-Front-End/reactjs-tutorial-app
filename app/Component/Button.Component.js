'use strict';

/**
 * 工程演示组件
 */

// 引入 React
import React from 'react';

/**
 * 定义一个 Button 组件, 并继承自 React.Component
 */
class Button extends React.Component {
  render() {
    return (
      // this.props.name 拿到父控件传过来的 name
      <button className="ui green button">{this.props.name}</button>
    )
  }
}

// 导出组件
export default button;
