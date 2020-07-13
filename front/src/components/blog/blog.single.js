import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import Articles from '../../data/articles';
import PageTitle from '../common/page.title';
import { JwModal } from '../dialog';
import Login from '../dialog/login'
import './blog.single.css';
import { blockParams } from 'handlebars';
import ChildComponent from './childlist';

function SinglePost(props) {
  const user = useSelector(state=>state.blog)

  console.log("user---------------*:", user)
  const [ flag, setFlag ] = useState(false);
  const [ textContent, setTextContent ] = useState('');
  const [ userCount, setUsercount ] = useState();
  const [ useralldata, setUserAllData ] = useState();
  const [ childflag, setChildComment ] = useState();

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
    })
    .catch(err => console.log(err))
   
    fetch(`${API_URL}/blog`, {
      method: 'get',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
    })
    .then(res =>
      res.json()
    )
    .then(data => {
      setUserAllData(data);
      setUsercount(data.length);
      
      console.log("data---------:", data)
    })
    .catch(err => console.log(err))
  },[]);

  const goBack = () => {
    props.history.goBack()
  }

  const reply = (data) =>{
    setTextContent(data);

    fetch(`${API_URL}/reply`, {
      method: 'post',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({ content: textContent, name:"user.profile.name2", picurl: "user.profile.profilePicURL", flag: "true" })
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

  const reply1 = (parent) => {
    if(parent === 0 ) {
      setChildComment(true);
    }
  }
 
  const commentBLock = () => {
    return (
      <div className="comment-content" >
        <div className="comment-title">Comments</div>
        <div className="comment-wrapper">
          <div className="comment-list">
            {/* <img className="comment-avartar-person" src={user.profile.profilePicURL}></img> */}
            <div className="comment-detail" >
              <div>
                {/* <p className="comment-name"> {user.profile.name}</p> */}
                <button className="btn btn-success reply" onClick={reply}>Reply</button>
              </div>
              {/* {flag? textArea: commentParea()} */}
              {textArea}
            </div>
          </div>
        </div>                    
      </div>
    );
  }

  const textArea = (
    <textarea className="comment-text" onChange={onChangeText} />
  );
    
  const userList = Array.isArray(useralldata) ? 
    useralldata.map( (user, key) => {
      if (user.flag === true) return null;
      return (
        <>
          <ChildComponent user={user} onReply={reply} />
        </>
      )
  }) : null;
  
  const commentParea = () =>{
    return (
      <div>
        <div className="comment-title">Comments</div>
        {userList}
        {childflag? commentBLock() :null}
      </div>
      
    );
  }
    
  const commentList = ()=>{
    if (userCount >= 1){
      // Second User
      console.log("flag-------",flag)
      return flag? null : commentParea();
    } else{
      // First User
      return commentBLock();
    }
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
                      <div dangerouslySetInnerHTML={{ __html: user.commenttitle }}></div>
                    </h2>
                    <br/>
                    <div className="post-thumb thumb"> 
                    <a href="" target="_blank" className="comment-avartar">
                      <div className="comment-avartar-person" >
                      </div>
                    </a>
                    <img alt='' className="img-responsive img-fullwidth" style={{height:'150px'}} src={user.commentimage} />
                    {/* <img src={`/images/blog/${user.image}`} alt="" className="img-responsive img-fullwidth" />  */}
                     </div>

                     {/* {user.profile ? <button className="btn btn-success reply" onClick={()=>childcomment(key)}>Reply1</button>
                    :null} */}

                    <button className="btn btn-success reply" onClick={()=>reply1(0)}>Reply1</button>
                  </div>
                  <div className="entry-content">
                    <div className="entry-meta media no-bg no-border mt-15 pb-20">
                      <div className="media-body pl-15">
                      </div>
                    </div>
                    <p>{user.commentdescription}</p>
                    {/* <div dangerouslySetInnerHTML={{__html: fetchData.description}}></div> */}
                  </div>

                  {user.profile ? commentList() : 
                    <div>
                      {commentList()}
                      
                      {commentnow}
                    </div> 
                  } 
                          
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