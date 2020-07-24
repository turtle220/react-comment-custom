import React from "react";

import Itemlist from './adminlist';
import Routeurl from './router';

class AdminPage extends React.Component{
   
    render() {
        return (
            <div style={{ display: 'flex'}}>
                <div style={{ backgroundColor: '#001529', paddingTop: '60px' }}>
                    <Itemlist />
                </div>
            
                <div style={{ width: '100%'}} >
                    <Routeurl />      
                </div>
            </div>
        )
    }
}
export default AdminPage;