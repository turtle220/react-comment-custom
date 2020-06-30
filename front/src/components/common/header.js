import React, {Component} from 'react';
import MainNav from './navigation.main';
export default class AppHeader extends Component{
    render(){
        return (
            <header id="header" className="header">
            <div className="header-top bg-theme-colored border-top-theme-colored2-2px sm-text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="widget text-white">
                      <ul className="list-inline xs-text-center text-white">
                        <li className="m-0 pl-10 pr-10"> <a href="#" className="text-white"><i className="fa fa-phone text-theme-colored2"></i> 123-456-789</a> </li>
                        <li className="m-0 pl-10 pr-10"> 
                          <a href="#" className="text-white"><i className="fa fa-envelope-o text-theme-colored2 mr-5"></i> contact@yourdomain.com</a> 
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 pr-0">
                    <div className="widget">
                      <ul className="styled-icons icon-sm icon-theme-colored2 pull-right flip sm-pull-none sm-text-center mt-5">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2">
                    {/* <ul className="list-inline sm-pull-none sm-text-center text-right text-white mb-sm-20 mt-10">
                      <li className="m-0 pl-10"> <a href="ajax-load/login-form.html" className="text-white ajaxload-popup"><i className="fa fa-user-o mr-5 text-white"></i> Login /</a> </li>
                      <li className="m-0 pl-0 pr-10"> 
                        <a href="ajax-load/register-form.html" className="text-white ajaxload-popup"><i className="fa fa-edit mr-5"></i>Register</a> 
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="header-middle p-0 bg-light xs-text-center">
              <div className="container pt-30 pb-0">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-3">
                    <div className="widget sm-text-center">
                      <i className="fa fa-envelope text-theme-colored2 font-32 mt-5 mr-sm-0 sm-display-block pull-left flip sm-pull-none"></i>
                      <a href="#" className="font-12 text-gray text-uppercase">Mail Us Today</a>
                      <h5 className="font-13 text-black m-0"> info@yourdomain.com</h5>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-6">
                    <div className="widget text-center mb-0">
                      <a className="" href="index-mp-layout1.html"><img className="mt-5" src="images/logo-wide.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-3">
                    <div className="widget sm-text-center pl-90 pl-sm-0">
                      <i className="fa fa-building-o text-theme-colored2 font-32 mt-5 mr-sm-0 sm-display-block pull-left flip sm-pull-none"></i>
                      <a href="#" className="font-12 text-gray text-uppercase">Company Location</a>
                      <h5 className="font-13 text-black m-0"> 121 King Street</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-nav">
              <div className="header-nav-wrapper navbar-scrolltofixed bg-white">
                <div className="container">
                  <MainNav/>
                </div>
              </div>
            </div>
          </header>
          
        )
    }

}