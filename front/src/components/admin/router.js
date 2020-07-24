import React from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route, Router } from 'react-router-dom'

import Confirm from './confirm'
import InsertBlog from './insertBlog'
import BlogList from './blogList'

class Routeurl extends React.Component{
    render(){
      return (
        <Switch>
          <Route exact path='/admin' component={InsertBlog}/>
          <Route exact path='/admin/insertBlog' component={InsertBlog}/>
          <Route exact path='/admin/blogList' component={BlogList}/>
          <Route exact path='/admin/confirm' component={Confirm}/>
        </Switch>
      );
    }
  };

export default Routeurl;