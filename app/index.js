'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './Container/App';
import Login from './Container/Login';
import Register from './Container/Register';

import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={Login}></Route>
      <Route path="register" component={Register}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
)






// 'use strict';
//
// import 'semantic-ui/semantic.min.css!';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory } from 'react-router';
//
// // Container
// import App from './Container/App';
// import Login from './Container/Login';
// import Register from './Container/Register';
//
// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={Login}>
//       <Route path="register" component={Register} />
//       <Route path="login" component={Login} />
//     </Route>
//   </Router>,
//   document.getElementById('app')
// );
