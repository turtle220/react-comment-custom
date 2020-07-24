import { Layout, Menu} from 'antd';

import React from 'react';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';

const {  Content, Footer, Sider } = Layout;

class Itemlist extends React.Component {
  state = {
    collapsed: false,
    users: []
  };


  onCollapse = collapsed => {
    
    this.setState({ collapsed });
    
  };

  render() {

    return (
      <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item >
              <span><Link to={{pathname: `/admin/insertBlog`}}>AddBlog</Link></span>
            </Menu.Item>
            <Menu.Item >
              <span><Link to={{pathname: `/admin/blogList`}}>BlogList</Link></span>
            </Menu.Item>
            <Menu.Item >
              <span><Link to={{pathname: `/admin/confirm`}}>User Comment</Link></span>
            </Menu.Item>

          </Menu>
        </Sider>
       
      </Layout>
      
      </React.Fragment>
    );
  }
}


export default Itemlist;//connect(mapStateToProps)(Routeurl);
