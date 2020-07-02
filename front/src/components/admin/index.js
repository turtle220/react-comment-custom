import React from "react";

import Itemlist from './adminlist';
import Comment from './comment';

class AdminPage extends React.Component{
   
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div>
                    <Itemlist />

                </div>
                <div style={{ width: '100%'}} > 
                    <Comment />
        
                </div>         

            </div>
        )
    }
}
export default AdminPage;