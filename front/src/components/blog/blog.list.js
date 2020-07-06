import React, {Component, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

import Articles from '../../data/articles';
import PageTitle from '../common/page.title';
import {Link} from 'react-router-dom';

function BlogList(props) {

const [fetchdata, setFetchData] = useState({})
const dispatch = useDispatch();

const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://samdivtech.com'
  : 'http://localhost:3111'
  
  useEffect(()=>{
    fetch(`${API_URL}/bloglist/get`, {
      method: 'Get',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
      // body: JSON.stringify("dfdfd")
    })
    .then(res =>
      res.json()
    )
    .then(data=> {
      console.log(data,':data----------- ')
      
      setFetchData(data);
    })
    .catch(err => console.log(err))
  },[])
  
  let comments = fetchdata;
  
  const list = Array.isArray(comments) ? 
    comments.map((comment)=>{
      return (
        <article className="post clearfix mb-10" key={comment.id} onClick={()=>{ dispatch({type: 'SET_BLOGDATA', value: comment }) }}>
          <Link to={`/post/${comment.id}`}>
            <div className="NewsCard">
              <div className="contentBlock">
                <h2 className="blue">

                <div dangerouslySetInnerHTML={{ __html: comment.comment }} />
                  {/* {comment.comment} */}
                </h2>
                <div className="detailsBlock">
                  <div className="details">
                    <span className="DomainLine">
                      kdnuggets.com
                    </span>
                    <span className="date">
                      5 days ago
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
