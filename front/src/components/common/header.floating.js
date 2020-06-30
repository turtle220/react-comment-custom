/* eslint-disable import/first */
import './header.floating.css';

import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Services from '../../data/services';
import Portfolios from '../../data/portfolios';
import $ from 'jquery';
if(!window.jQuery) global.jQuery = global.$ = $;
import menuzord from '../../libraries/menuzord';
menuzord(window.jQuery);


const tpj = window.jQuery;
export default class FloatingHeader extends Component{

    constructor(props){
        super(props);
        this.menuzordRef = React.createRef();
        // this.state = {services: [], portfolios: []}
    }
    
    componentDidMount(){       
        var menuzord_right = tpj("#menuzord-right");
        if( menuzord_right.length > 0 ) {
            menuzord_right.menuzord({
                align: "right",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
        }    
    }

    render(){
        return (
            <header id="header" className="header header-floating">
            <div className="header-nav navbar-sticky navbar-sticky-animated">
              <div className="header-nav-wrapper">
                <div className="container">
                    <nav id="menuzord-right" ref={this.menuzordRef} className="menuzord blue no-bg">
                        <Link to="/" className="menuzord-brand switchable-logo pull-left flip mb-15">
                        <span className="logo-default"><img className="logo-default" src="images/logo_samdivtech.png" alt="" />Samdiv Technologies</span>
                        <span className="logo-scrolled-to-fixed"><img  src="images/logo_samdivtech.png" alt="" />
                        Samdiv Technologies</span>
                        </Link>
                        <ul className="menuzord-menu">
                            <li key={'home'}><Link to="/">Home</Link> </li>
                            <li key={'services'}><Link to="#">Services </Link>
                                <ul className="dropdown">
                                    {
                                        Services.map((service)=>{
                                            if(service.active){
                                                return (
                                                    <li key={service.id}><Link to={`/service/${service.id}`}>{service.title} </Link></li>
                                                )
                                            }                                            
                                        })
                                    }                                
                                </ul>
                            </li>
                            <li key={'portfolios'}><Link to="#">Portfolio</Link>
                                <ul className="dropdown">
                                    {
                                        Portfolios.map((portfolio)=>{
                                            return (
                                                <li key={portfolio.id}><Link to={`/portfolio/${portfolio.id}`}>{portfolio.title} </Link></li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                            
                            <li><a href="#">Company</a>
                                <ul className="dropdown"> 
                                    <li key={'about'}><Link to="/about">About Us </Link></li>
                                    <li key={'directorsmessage'}><Link to="/director-message">Director's Desk </Link></li>
                                    <li key={'team'}><Link to="/team">Our Team</Link></li>
                                    <li key={'careers'}><Link to="/careers">Careers </Link></li>
                                </ul>
                            </li>  
                            <li key={'blog'}><Link to="/blog">Blog </Link></li>
                            <li key={'contact'}><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
              </div>
            </div>
          </header>
        )
    }
}

