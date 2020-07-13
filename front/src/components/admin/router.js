import React from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route, Router } from 'react-router-dom'

import Confirm from './confirm'
import Comment from './comment'

class Routeurl extends React.Component{
    render(){
      return (
        <Switch>
          <Route exact path='/admin' component={Comment}/>
          <Route exact path='/admin/confirm' component={Confirm}/>
        </Switch>
      );
    }
  };

export default Routeurl;