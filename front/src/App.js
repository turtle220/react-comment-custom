/* eslint-disable import/first */
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AppFooter from './components/common/footer'
import AppHeader from './components/common/header.floating'
import Homepage from './components/homepage'
import ServicePage from './components/services'
import BlogListing from './components/blog/blog.list'
import BlogSingle from './components/blog/blog.single'
import Portfolio from './components/portfolio'
import AboutUs from './components/aboutus'
import ContactUs from './components/contact-us'
import ServiceDetails from './components/service.details'  
import PortfolioDetails from './components/portfolio-single'
import Careers from './components/careers'
import DirectorsMessage from './components/director-message'
import OurTeam from './components/team'
import AdminPage from './components/admin/index';

require('bootstrap');
require('jquery-ui');

class App extends Component {

  handleUpdate() {
    let {
      action
    } = this.state.location;

    console.log(action, 'action');
  
    if (action === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }

  ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

  render() {
    if(window.jQuery) {
      return (
        <Router onUpdate={this.handleUpdate}>
          <div className="App">
            <Switch>
              <Route path="/admin" component={AdminPage} />

              <div id="wrapper" className="clearfix">
                  <AppHeader/>  
                    <Route component={this.ScrollToTop} />
                    <Route exact path="/" component={Homepage} />
                    <Route path="/services" component={ServicePage} />
                    <Route path="/service/:id" component={ServiceDetails} />
                    <Route path="/blog" component={BlogListing} />
                    <Route path="/portfolios" component={Portfolio} />
                    <Route path="/portfolio/:id" component={PortfolioDetails} />                  
                    <Route path="/about" component={AboutUs} />
                    <Route path="/contact" component={ContactUs} />
                    <Route path="/careers" component={Careers} />                  
                    <Route path="/team" component={OurTeam} />

                    <Route path="/post/:id" component={BlogSingle} />
                    <Route path="/director-message" component={DirectorsMessage} /> 
                    {/* <Redirect from="post/:id" to="blog" /> */}
                  <AppFooter/>

              </div>  
            </Switch>
          </div>      
          
        </Router>


      );
    }
    
  }
}

export default App;
