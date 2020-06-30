import React, {Component} from 'react';
import PageTitle from '../components/common/page.title';
// import Portfolios from '../data/portfolios';
import Config from '../services/config';
import axios from 'axios';

export default class Portfolio extends Component {

    constructor(props){
        super(props);
        // this.setIsotopeFilter = this.setIsotopeFilter.bind(this);
        this.state = {portfolios : []}
    }

    componentDidMount(){

        let jtp = window.jQuery;

        axios.get(`${Config.API_URL}${Config.API_ENDPOINTS.portfolios}/latest`)
        .then((response)=>{
            
            this.setState({portfolios: response.data});
            var portfolio_gallery = jtp(".gallery-isotope");
    
            if( portfolio_gallery.length > 0 ) {
                portfolio_gallery.imagesLoaded(function(){
                    if (portfolio_gallery.hasClass("masonry")){
                        portfolio_gallery.isotope({
                            itemSelector: '.gallery-item',
                            layoutMode: "masonry",
                            masonry: {
                                columnWidth: '.gallery-item-sizer'
                            },
                            filter: "*"
                        });
                    } else{
                        portfolio_gallery.isotope({
                            itemSelector: '.gallery-item',
                            layoutMode: "fitRows",
                            filter: "*"
                        });
                    }
                });
            }
        })


        

        
    }

    setIsotopeFilter(selectedFilter) {
        console.log(selectedFilter, "selectedFilter");
        let jtp = window.jQuery;
        let portfolio_gallery = jtp(".gallery-isotope");
        if (portfolio_gallery.hasClass("masonry")){
            portfolio_gallery.isotope({
                itemSelector: '.gallery-item',
                layoutMode: "masonry",
                masonry: {
                    columnWidth: '.gallery-item-sizer'
                },
                filter: selectedFilter
            });
        } else{
            portfolio_gallery.isotope({
                itemSelector: '.gallery-item',
                layoutMode: "fitRows",
                filter: selectedFilter
            });
        }
    }

    render () {
        let portfoliosHtml = this.state.portfolios.map((portfolio)=>{
            return <div key={portfolio.id} className={`gallery-item ${portfolio.category}`}>
            <div className="thumb">
            <img className="img-fullwidth" src={`images/portfolio/${portfolio.image}`} alt="project" />
            <div className="overlay-shade"></div>
            <div className="icons-holder">
                <div className="icons-holder-inner">
                <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                    <a data-lightbox="image" href={`images/portfolio/${portfolio.image}`}><i className="fa fa-plus"></i></a>
                    <a href="#"><i className="fa fa-link"></i></a>
                </div>
                </div>
            </div>
            <a className="hover-link" data-lightbox="image" href={`images/portfolio/${portfolio.image}`}>View more</a>
            </div>
        </div>
        })

    return (
      <div className="main-content"  id="filter1">
        <PageTitle title="Portfolios" bgimg="images/bg/services.jpg"/>
        <section>
        <div className="container">
            <div className="section-content">
            <div className="row" >
                <div className="col-md-12">
                <div className="portfolio-filter">
                    <a href="#filter1" className="active" data-filter="*" onClick={(e)=> this.setIsotopeFilter('*')}>All</a>
                    <a href="#filter1" className="" data-filter=".web" onClick={(e)=> this.setIsotopeFilter('.web')}>Website</a>
                    <a href="#filter1" className="" data-filter=".mobile" onClick={(e)=> this.setIsotopeFilter('.mobile')}>Mobile</a>
                    <a href="#filter1" className="" data-filter=".cloud" onClick={(e)=> this.setIsotopeFilter('.cloud')}>Cloud </a>
                </div>              
                <div id="grid" className="gallery-isotope default-animation-effect grid-3 gutter clearfix">
                    {portfoliosHtml ? portfoliosHtml : ''}
                </div>
            </div>
            </div>
        </div>
        </div>
        </section>
      </div>
    )
  }
}
