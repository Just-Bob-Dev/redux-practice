import React from 'react';
require('../../scss/style.scss');
import UserList from '../containers/user-list.js';
import UserDetail from '../containers/user-detail.js';

const App = () => (
  <div>
    <h2>Username List:</h2>
    <UserList />
    <hr/>
    <h2>User Details</h2>
    <UserDetail/>
  </div>
);


export default App;
