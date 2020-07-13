import React from "react";
import { Switch, Route, Router } from 'react-router-dom'

import Itemlist from './adminlist';
import Comment from './comment';
import Confirm from './confirm';
import Routeurl from './router';

class AdminPage extends React.Component{
   
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div>
                    <Itemlist />

                </div>
            
                <div style={{    
                    paddingTop: '50px',
                    paddingRight: '50px',
                    paddingLeft: '140px'
                }} >
                    <Routeurl />      

                </div>

            </div>
        )
    }
}
export default AdminPage;