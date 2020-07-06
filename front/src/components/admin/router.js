import React from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route, Router } from 'react-router-dom'


class Routeurl extends React.Component{
    render(){
      return (
        <Switch>
          {/* <Route exact path='/' component={Newcontact}/>
          <Route exact path='/:name' component={ContentControl}/> */}
        </Switch>
      );
    }
  };

export default Routeurl;