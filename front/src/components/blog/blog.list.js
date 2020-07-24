import React, {Component, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Config from '../../config.json';

import Articles from '../../data/articles';
import PageTitle from '../common/page.title';
import {Link} from 'react-router-dom';

function BlogList(props) {

const [fetchdata, setFetchData] = useState({})
const dispatch = useDispatch();

  useEffect(()=>{
    fetch(`${Config.serverapi}/getBlogList`, {
      method: 'post',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
    })
    .then(res =>
      res.json()
    )
    .then(data=> {      
      setFetchData(data);
    })
    .catch(err => console.log(err))
  },[])
  
  let blogs = fetchdata;

  const list = Array.isArray(blogs) ? 
    blogs.map((blog, index)=>{
      return (
        <article className="post clearfix mb-10" key={blog._id} >
          <Link to={`/post/${blog._id}`}>
            <div className="NewsCard">
              <div className="contentBlock">
                <h2 className="blue">
                  <div dangerouslySetInnerHTML={{ __html: blog.blogTitle }} />
                </h2>
                <div className="detailsBlock">
                  <div className="details">
                    <span className="date">
                      { blog.curDate }
                    </span>
                  </div>
                </div>
              </div>
              <div className="authorBlock">
                <div className="Author">
                  <div style={{backgroundImage:'url(./images/avatar/director.jpg)',borderRadius:'20px',minWidth:'40px',minHeight:'40px'}} className="Avatar"></div>
                </div>
              </div>
            </div>
          </Link>
        </article>
      )
    }) : null
   
    return (
      <div className="main-content">
        <PageTitle title="Our Blog" bgimg="images/bg/services.jpg" />
        <section >
          <div className="container mt-30 mb-30 pt-30 pb-30">
            <div className="row multi-row-clearfix">
              <div className="blog-posts">
                <div className="col-md-12">
                  <div className="list-dashed">
                      {list}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>                  
      </div>
    )
}

export default BlogList;
