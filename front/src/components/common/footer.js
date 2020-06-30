import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Services from '../../data/services';
export default class AppFooter extends Component {

    render(){
        return (
            <div>

    <footer id="footer" className="footer" data-bg-color="#152029" style={{backgroundColor:"#152029"}}>
    <div className="container pt-70 pb-40">
      <div className="col-md-3">
        <div className="widget dark">
        <h4 className="widget-title">About Us</h4>
          <p className="font-12 mt-20 mb-20">Samdiv Technologies is an independent, Irish based, IT Services and Technology Solutions Company providing cutting-edge cloud-based, AI technology solutions</p>          
        </div>
      </div>
      <div className="col-md-9">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="widget dark">
              <h4 className="widget-title">Useful Links</h4>
              <div className="row clearfix">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <ul>
                    {/* <li><Link to="/portfolios">Portfolio</Link></li> */}                    
                    <li><Link to="/careers">Careers</Link></li>  
                    <li><Link to="/blog">Blog</Link></li>  
                    <li><Link to="/contact">Contact Us</Link></li>                  
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="widget dark">
              <h4 className="widget-title">Our Services</h4>
              <div className="row clearfix">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <ul>
                      {
                          Services.map((service)=>{
                              return (
                                  <li key={service.id}><Link to={`/service/${service.id}`}>{service.title} </Link></li>
                              )
                          })
                      }                   
                  </ul>
                </div>
                
              </div>
              
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="widget dark">
              <h4 className="widget-title">Office Address</h4>
              <div className="row clearfix">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  Westmeath Co., Athlone, Westmeath N37 XD73, IE
                  <br/>
                  <strong>Email: </strong> info@samdivtech.com
                  <br/>
                  <strong>Phone: </strong> +353 89 981 6708
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-sm-6 col-md-4">
            <div className="widget dark">
              <h4 className="widget-title">Tags</h4>
              <div className="tags">
                <a href="#">travel</a>
                <a href="#">blog</a>
                <a href="#">lifestyle</a>
                <a href="#">feature</a>
                <a href="#">mountain</a>
                <a href="#">design</a>
                <a href="#">restaurant</a>
                <a href="#">journey</a>
                <a href="#">classic</a>
                <a href="#">sunset</a>
              </div>
            </div>
          </div> */}
          {/* <div className="col-sm-6 col-md-4">
            <div className="widget dark">
              <h4 className="widget-title mb-25">Twitter Feed</h4>
              <div className="twitter-feed-carousel clearfix" data-username="Envato" data-count="3"></div>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
    <div className="footer-bottom" data-bg-color="#253039" style={{backgroundColor: "#253039"}}>
      <div className="container pt-20 pb-20">
        <div className="row">
          <div className="col-md-6">
            <p className="font-12 sm-text-center text-black-777 m-0">Copyright &copy;2019 Samdiv Technologies. All Rights Reserved</p>
          </div>
          {/* <div className="col-md-6 text-right">
            <div className="widget no-border m-0">
              <ul className="list-inline sm-text-center mt-5 font-12">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>|</li>
                <li>
                  <a href="#">Help Desk</a>
                </li>
                <li>|</li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </footer>
  <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>
            </div>
        );
    }
}