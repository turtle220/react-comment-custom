import React, {Component} from 'react';
import PageTitle from './common/page.title';
/* import Config from '../services/config';
import axios from 'axios'; */
import Portfolios from '../data/portfolios';

export default class PortfolioDetails extends Component{

    constructor(props){
        super(props);
        this.state = {portfolios : []}
    }

    componentDidMount(){
        /* axios.get(`${Config.API_URL}${Config.API_ENDPOINTS.portfolios}/latest`)
        .then((response)=>{
            this.setState({portfolios: response.data})
         }) */
    }

    render(){
        let portfolioDetails = Portfolios.find((portfolio)=>{return this.props.match.params.id == portfolio.id});
        return (
        <div className="main-content">
            <PageTitle title="Portfolio Details" bgimg="/images/bg/services.jpg"/>
            <section>
            <div className="container mt-30 mb-30 pt-30 pb-30">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                <div className="blog-posts single-post">
                { portfolioDetails ? 
                    <article className="post clearfix mb-0">
                        <div className="entry-header">
                            <div className="post-thumb thumb"> <img src={`/images/portfolio/${portfolioDetails.image}`} alt="" className="img-responsive img-fullwidth" />  </div>
                        </div>
                        <div className="entry-content">
                            <div className="entry-meta media no-bg no-border mt-15 pb-20">
                            <div className="media-body pl-15">
                                <div className="event-content pull-left flip">
                                    <h4 className="line-bottom mt-20 mb-20 text-theme-colored">{portfolioDetails.title}</h4>   
                                    {/*  <ul className="list theme-colored check">
                                        <li>
                                            React
                                        </li>
                                    </ul>  */}
                                </div>                                
                            </div>
                            <div dangerouslySetInnerHTML={{__html: portfolioDetails.description}}></div>
                            </div>
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
    
}