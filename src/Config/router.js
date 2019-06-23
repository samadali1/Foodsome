import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Usersignup from '../Components/Usersignup';
import Restaurentsignup from '../Components/Restaurentsignup';
import Userpanel from '../Components/Userpanel';
import Restaurentpanel from '../Components/Restaurentpanel';
import Md from '../Components/modal'
const Routes = () => (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/restaurentsignup" component={Restaurentsignup} />
        <Route path="/usersignup" component={Usersignup} />
        <Route path="/userpanel/:username" component={Userpanel} />
        <Route path="/restaurentpanel/:username" component={Restaurentpanel} />
      </div>  
    </Router>
);
export default Routes;