'use strict';

/**
 * 入口文件
 *
 */

/**
 * 引入 semanticui
 * ! 为了让 css 插件处理
 */
import 'semantic-ui/semantic.min.css!';

/**
 *  引入 React
 */
import React from 'react';

/**
 *  引入 ReactDOM
 */
import ReactDOM from 'react-dom';

/**
 * 引入所有的 Container
 */
import App from './Container/App';
import Login from './Container/Login';
import Register from './Container/Register';

/**
 * 引入路由
 * browserHistory 来自于 jspm install npm:history
 */
import { Router, Route, browserHistory } from 'react-router';

// ReactDOM.render() 实例化根组件，启动框架，注入标记到原始的 DOM 元素中，作为第二个参数提供。
ReactDOM.render(
  <Router history={browserHistory}>
    /**
     * 定义根页面的路由
     * @path 路由地址
     * @component 组件
     */
    <Route path="/" component={App}>
      <Route path="login" component={Login}></Route>
      <Route path="register" component={Register}></Route>
    </Route>
  </Router>,
  /**
   * 注入标记到 app 中
   */
  document.getElementById('app')
)
