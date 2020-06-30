import React, {Component} from 'react'
// import HomeSlider from './common/revolution.slider.home';
import './homepage.css'
import {Link} from 'react-router-dom'
import Services from '../data/services'
import Articles from '../data/articles'
import Testimonials from '../data/testimonials'
import Clients from '../data/clients'
var serviceCnt = 1;

// import axios from 'axios';
// import Config from '../services/config';

export default class Homepage extends Component {

  /*
  constructor(props){
    super(props);
    this.state = {services : [], articles: []}
  }

  componentDidMount(){
    axios.get(`${Config.API_URL}${Config.API_ENDPOINTS.services}/latest`)
    .then((response)=>{
        this.setState({...this.state, services: response.data});
        return axios.get(`${Config.API_URL}${Config.API_ENDPOINTS.articles}/latest`);
    })
    .then((articles)=>{
        this.setState({...this.state, articles: articles.data});
    })
  }
  */

  render () {
    return (     
      <div className="main-content">
        <section
          id="home"
          className="divider parallax dark-overlay"
          style={{backgroundImage: 'url(images/bg/bg1.jpg)'}}
        >
          <div className="display-table">
            <div className="display-table-cell">
              <div className="container pt-200">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="bg-white-transparent text-center pt-20 pb-50 outline-border">
                      <h1 className="text-white" style={{fontSize: 45}}>
                      We build the world class digital products
                      </h1>
                      <br/>
                      <h3 className="font-weight-400" style={{color: '#c4bcbc'}}>
                      Providing technology services across Web, Mobile, Cloud and other digital fields to startups helping them to increase their business !!  
                      </h3>
                      <br/><br/>
                      <Link
                        className="btn btn-primary btn-xl"
                       to="/contact"
                      >
                       <strong>Contact Us</strong>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motto line start */}

        <section>
          <div className="container pb-20 pt-20">
            <div className="section-title text-center mb-40">
              <div className="row">
                  {/* <h2 className="title text-uppercase">Our Motto</h2> */}
                  <marquee><h3 className='marqueetxt'>Success Is Making Unknown Known and Creating Order out of Chaos with speed faster than light. </h3></marquee>
              </div>
            </div>
          </div>
        </section>


        {/* Motto line ends */}
        <section style={{backgroundColor: '#f5f5f5'}}>
          <div className="container pb-40">
            <div className="section-title text-center mb-40">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h2 className="title text-uppercase">
                    Our Popular
                    {' '}
                    <span className="text-theme-colored2">Services</span>
                  </h2>
                  <div className="line-bottom-double-line-centered" />
                  <p className="mt-10">
                    We provide services in various regions. Below are our popular services.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row">
                
              {                                  
                  Services.map((service)=>{
                    if(service.homepage) {
                      let toShow = service.excerpt.substring(0,200)+"...";
                      return (
                        <Link to={`/service/${service.id}`} key={service.id}>
                        <div className="col-xs-12 col-sm-6 col-md-4 serviceIntroBox" key={service.id}>
                          <div className="icon-box left media border-1px border-hover-theme-colored mb-30 p-30 pb-20">
                            {' '}
                            <span className="media-left pull-left flip">
                              <i className="fa fa-chrome text-theme-colored2" />
                            </span>
                            <div className="media-body">
                              <h4 className="media-heading heading font-weight-600">
                                {service.title}
                              </h4>
                              <p className="serviceExcerpt">
                                {toShow}
                              </p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      )
                    }
                  })
              }            
              
              </div>
            </div>
          </div>
        </section>
        { Testimonials.active ? 
        <section
          className="border-blue layer-overlay overlay-white-9 parallax"
          data-bg-img="http://placehold.it/1920x1080"
        >
          <div className="container">
            <div className="section-title text-center mb-40">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <h2 className="title text-uppercase">
                      We love our clients and they love us too
                    {/* Our
                    {' '}
                    <span className="text-theme-colored2">Client's</span>
                    {' '}
                    Say */}
                  </h2>
                  <div className="line-bottom-double-line-centered" />
                  <p className="mt-10">
                  Samdiv Technologies has worked with a number of clients earlier, including some big names. The company offers vivid services, and so the list of clients also covers nearly every type of industry. The clients have always praised the services and the work. When you work with Samdiv Technologies, you work with a team committed and excited to become an extension in your business. In the end, the company values your success as their own.

                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="owl-carousel-2col" data-dots="true">
                { Testimonials.data.map((testimonial)=>{
                  return (
                    <div className="item">
                    <div className="testimonial style1">
                      <div className="comment">
                        <p>
                          {testimonial.testimonial}
                        </p>
                      </div>
                      <div className="content mt-20">
                        <div className="thumb pull-right flip">
                          {' '}
                          <img
                            className="img-circle"
                            alt=""
                            src={`/images/testimonials/${testimonial.image}`}
                          />
                          {' '}
                        </div>
                        <div className="text-right flip pull-right flip mr-20 mt-0">
                          <h5 className="author font-weight-600">
                            {testimonial.name}
                          </h5>
                          <h6 className="title text-theme-colored2">
                            {testimonial["company-name"]}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>                  
                  )
                })}

                </div>
              </div>
            </div>
          </div>
        </section>
        : ''}
        <section id="blog" className="border-blue">
          <div className="container pb-40">

          <div className="section-title">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-uppercase title">Latest <span className="text-theme-colored2">News</span></h2>
                <div className="diamond-line-left-theme-colored2"></div>
              </div>
            </div>
          </div>
            
            <div className="section-content" id="articles">
              <div className="row">                
                {
                  Articles.map( article=> {
                    return (
                    <div className="col-sm-6 col-md-4" key={article.id}>
                    <article className="post bg-lighter maxwidth400 mb-30">
                      <div className="entry-header">
                        <div className="post-thumb thumb">
                          <img
                            src={`images/blog/${article.image}`}
                            className="img-responsive img-fullwidth"
                          />
                        </div>
                      </div>
                      <div className="entry-content bg-white border-1px p-20">
                        <Link to={`/post/${article.id}`}> 
                          <h4 className="entry-title font-weight-600 text-uppercase mb-10">
                            {article.title}{' '} 
                        </h4>
                        </Link>
                        <Link to={`/post/${article.id}`}> View Details → </Link>
                       
                      </div>
                    </article>
                    </div>
                    )
                  })
                }                
              </div>
            </div>
          </div>
        </section>
        {Clients.active ? 
        <section className="clients bg-silver-light border-top-theme-colored2-2px border-blue" >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <h2 className="text-uppercase title">
                    Our <span className="text-theme-colored2">Clients</span>
                  </h2>
                  <br/><br/>
                <div className="owl-carousel-6col clients-logo transparent text-center">
                  {Clients.data.map((client)=>{
                    return (
                      <div className="item">
                        {' '}
                        <a href="#">
                          <img src={`/images/clients/${client.image}`} alt="" />
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        : ''}
        <section className="bg-theme-colored2">
          <div className="container pt-0 pb-0">
            <div className="row">
              <div className="call-to-action sm-text-center pt-30 pb-20">
                <div className="col-md-9">
                  <h3 className="mt-5 text-white font-weight-600">
                  Request a free consultation and get a no obligation quote for your project
                  </h3>
                </div>
                <div className="col-md-3 text-right flip sm-text-center" style={{fontSize: 30}}>
                  <Link
                    className="btn btn-default btn-lg font-weight-600 mt-5"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
