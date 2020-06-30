import React, {Component} from 'react';
import Services from '../data/services';
import PageTitle from './common/page.title';
export default class ServiceDetails extends Component{
       
     constructor(props){
        super(props);
    }

    render(){
        let serviceDetails = Services.find((service)=>{return this.props.match.params.id == service.id});

        if(serviceDetails) {
            //let serviceDetails = this.state.service;
            return (
                <div className="main-content">  
                    <PageTitle title={serviceDetails.title} bgimg="/images/bg/services.jpg"/>
                    <section>
                    <div className="container mt-30 mb-30 pt-30 pb-30">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={`/images/services/${serviceDetails.image}`} />
                        </div>
                        <div className="col-md-12">
                        <div className="blog-posts single-post">
                            {serviceDetails? 
                            <article className="post clearfix mb-0">
                            
                            <div className="entry-content">
                                <div className="entry-meta media no-bg no-border mt-15 pb-20">
                                
                                <div className="media-body pl-15">
                                    <div className="event-content pull-left flip">
                                        <h3 className="line-bottom mt-20 mb-20 text-theme-colored">{serviceDetails.title}</h3>                      
                                    </div>
                                </div>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: serviceDetails.desc}}></div>
                            </div>
                            </article> : ''
                             }
                            </div>
                        </div>
                       
                    </div>
                    </div>
                </section> 
                </div>)
        }
        else{
            return (
                <div></div>
            )
        }
        
    }
    
}