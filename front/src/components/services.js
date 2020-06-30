import React, {Component} from 'react';
import PageTitle from './common/page.title';

export default class ServicesPage extends Component{
    render(){
        return (
            <div className="main-content">
                <PageTitle title="Services" bgimg="images/bg/services.jpg" />  
                This is service page
            </div>
        )
    }
}