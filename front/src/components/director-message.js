import React, {Component} from 'react';
import PageTitle from '../components/common/page.title';

export default class DirectorsMessage extends Component {
    render(){
        return (
            <div className="main-content">
                <PageTitle title="Director's Desk" bgimg="images/bg/services.jpg" />
                <section className="divider">
                    <div className="container">
                        <div className="row pt-30">
                            <div className="col-md-6">
                                <h3 className="font-weight-500 font-30 font- mt-10"><span className="text-theme-colored2"> Deepak Yadav </span></h3>
                                <p className="lead">15+ years of IT Experience</p>
                                <p>
                                    Samdiv Technologies is an independent, Irish based, IT Services and Technology Solutions Company providing cutting-edge cloud-based, AI technology solutions. The company has been launched by Deepak Yadav who is having more than a decade of experience in IT across multiple domains spread across global locations.
                                </p>
                                <p>
                                    The company is leveraging its extensive experience in web services technologies, cloud, AWS, Big data to deliver advanced technology solutions to its customers. At Samdiv our main aim is to attract, engage and retain the best talent and deliver strategic consultancy services that help leading companies grow their business.
                                </p>
                                <p>
                                    Our team can provide you with unparalleled trust and insight into your technology division which allows us to provide strategic advice and place expert talent, that allows your business or career to flourish.
                                </p>
                            </div>
                            <div className="col-md-6">
                                    <img src="images/director.jpg" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}