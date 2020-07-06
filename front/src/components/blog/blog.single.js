import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import Articles from '../../data/articles';
import PageTitle from '../common/page.title';
import { JwModal } from '../dialog';
import Login from '../dialog/login'
import './blog.single.css';
import { blockParams } from 'handlebars';

function SinglePost(props) {
  const user = useSelector(state=>state.blog)

  const [ fetchData, setFetchData ] = useState({})
  const [ flag, setFlag ] = useState(false);
  // console.log(user,"************FB user*********************")

  const [ textcontent, setTextContent ] = useState('');
  const API_URL = process.env.NODE_ENV === 'production'
      ? 'https://samdivtech.com'
      : 'http://localhost:3111'

  useEffect(() => {

    fetch(`${API_URL}/blog`, {
      method: 'post',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
      body: JSON.stringify({ blogId: props.match.params.id})
    })
    .then(res =>
      res.json()
    )
    .then(data => {
      console.log('data ',data)
      setFetchData(data.json())
    })
    .catch(err => console.log(err))
   
    fetch(`${API_URL}/blog`, {
      method: 'get',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
      // body: JSON.stringify({ blogId: props.match.params.id})
    })
    .then(res =>
      res.json()
    )
    .then(data => {
      console.log('data_____________________-------------- ',data[0].flag)
      setFlag(data[0].flag)
    })
    .catch(err => console.log(err))
  },[]);

  const goBack = () => {
    props.history.goBack()
  }

  const reply = () =>{

      fetch(`${API_URL}/reply`, {
        method: 'post',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({ content:textcontent, name:user.profile.name, picurl:user.profile.profilePicURL, flag:flag })
      })
      .then(res =>
        res.json()
      )
      .then(data => {
        console.log('data ',data)
      })
      .catch(err => console.log(err))
  }

  const onChangeText = (e)=>{
    setTextContent(e.target.value)
  }

  const textarea = 
    <textarea className="comment-text" onChange={onChangeText} />;
  
  const parea = 
    <p className="comment-text">dfsdfsdfsdfsdf</p>;
    
 
  const commentBLock = ()=>{
    return (
      <div className="comment-content" >
        <div className="comment-title">Comments</div>

        <div className="comment-wrapper">
          <div id="comment-7" className="commnet-anchor"></div>
          
          <div className="comment-list">
            
            <img className="comment-avartar-person" src={user.profile.profilePicURL}></img>
            <div className="comment-detail" >
              <div>
                <p className="comment-name"> {user.profile.name}</p>
                <button className="btn btn-success reply" onClick={reply}>Reply</button>
              </div>
              {flag? textarea: parea}
            </div>
          </div>
              
        </div>                    
      </div>
    );
  }

  const commentnow =    
      <div className="read" >
      <button className="Button primary big" onClick={JwModal.open('auth-modal')} >
        Comment Now
      </button>
  
</div>
  return (
    <div className="main-content">
      <PageTitle title="Blog Details" bgimg="/images/bg/services.jpg"/>
      <section>
        <div className="container mt-30 mb-30 pt-30 pb-30">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="blog-posts single-post">   
                <article className="post clearfix mb-0">
                  <div className="filter">
                    <button className="Button iconButton noPadding">
                      <div className="icon">
                        <svg id="Réteg_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12">
                          <path id="path-1_1_" d="M5.9 0c.4 0 .9.3 1 .7s.1.9-.2 1.2L2.7 6l4 4.1c.3.5.3 1.1-.1 1.6s-1.1.4-1.5.1l-4.8-5c-.4-.4-.4-1.2 0-1.6L5.1.3c.2-.2.5-.3.8-.3z"></path>
                        </svg>
                      </div>
                      <div className="desktopOnly" onClick={(e)=>goBack(e)}>Back to News</div>
                    </button>
                  </div>
                  <div className="entry-header">
                    <h2>
                      <div dangerouslySetInnerHTML={{ __html: user.comment }}></div>
                    </h2>
                    <br/>
                    <div className="post-thumb thumb"> 
                    <a href="" target="_blank" className="comment-avartar">
                      <div className="comment-avartar-person" >
                      </div>
                    </a>
                    <img src={`/images/blog/${fetchData.image}`} alt="" className="img-responsive img-fullwidth" />  </div>
                  </div>
                  <div className="entry-content">
                    <div className="entry-meta media no-bg no-border mt-15 pb-20">
                      <div className="media-body pl-15">
                      </div>
                    </div>
                    <p>Hello, EveryBody!</p>
                    <div dangerouslySetInnerHTML={{__html: fetchData.description}}></div>
                  </div>
                  {commentBLock}
                  {user.profile ? commentBLock() : commentnow}
                </article>
              </div>
            </div>
          </div>
        </div>
      </section> 

      <JwModal id="auth-modal">
        <Login />
      </JwModal>
    </div>
  );
}

export default SinglePost;