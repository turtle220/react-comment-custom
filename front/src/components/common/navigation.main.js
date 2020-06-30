import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class MainNav extends Component{
    componentDidMount(){
        var tpj = window.jQuery;
        var menuzord2 = tpj("#menuzord");
        if( menuzord2.length > 0 ) {
        menuzord2.menuzord({
            align: "left",
            effect: "slide",
            animation: "none",
            indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
            indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
        });
        }
        
    }
    render(){
        return (
            <nav id="menuzord" ref="menuzord" className="menuzord default menuzord-responsive">
                <ul className="menuzord-menu">
                    <li className="active"><Link to="/">Home</Link> </li>
                    <li><Link to="/services">Services </Link></li>
                </ul>
                <div className="pull-right sm-pull-none mb-sm-15">
                    <a className="btn btn-colored btn-theme-colored mt-15 mt-sm-10 pt-10 pb-10 ajaxload-popup" href="ajax-load/form-appointment.html">Get a Quote</a>
                </div>
            </nav>
        )
    }
    
}