import React, {Component} from 'react';
import Articles from '../../data/articles';
import PageTitle from '../common/page.title';
import {Link} from 'react-router-dom';

function BlogList(props) {

    let list = Articles.map((article)=>{
      return (
        <article className="post clearfix mb-10" key={article.id}>
          <Link to={`/post/${article.id}`}>
            <div className="NewsCard">
              <div className="contentBlock">
                <h2 className="blue">
                  {article.title}
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
    })

    return (
      <div className="main-content">
        <PageTitle title="Our Blog" bgimg="images/bg/services.jpg" />
        <section>
          <div className="container mt-30 mb-30 pt-30 pb-30">
            <div className="row multi-row-clearfix">
              <div className="blog-posts">
                <div className="col-md-12">
                  <div className="list-dashed">
                      { list }                             
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
