import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom';
import Config from '../../config.json';

import PageTitle from '../common/page.title';
import { JwModal } from '../dialog';
import Login from '../dialog/login'
import CommentForm from '../comment/comment-form'

import './blog.single.css';
import { func } from 'prop-types';

function SinglePost(props) {
  const socialAuth = useSelector(state=>state.auths)
  const [ blogContent, setBlogContent ] = useState();
  const [ commentContent, setCommentContent ] = useState();
  var comments = []

  useEffect(()=>{
    getBlogAndCommentDataFromServer()
  },[])
  
  const goBack = () => {
    props.history.goBack()
  }
  function getBlogAndCommentDataFromServer() {
    fetch(`${Config.serverapi}/getBlogAndComment`, {
      method: 'post',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
      body: JSON.stringify({ blogId: props.match.params.id })
    })
    .then(res =>
      res.json()
    )
    .then(data => {
      setBlogContent(data.blogData)

      comments = []
      for(let i=0; i< data.commentData.length; i++) {
        getCommentSequenceData(data.commentData[i])
      }
      console.log('getBlogAndCommentDataFromServer---------', comments)
      setCommentContent(comments)
    })
    .catch(err => console.log(err))
  }
  const setCommentDataToServer = (comment) =>{
    fetch(`${Config.serverapi}/saveComment`, {
      method: 'post',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
      body: JSON.stringify({ comment })
    })
    .then(res =>
      res.json()
    )
    .then(data => {
      comments = []
      for(let i=0; i< data.commentData.length; i++) {
        getCommentSequenceData(data.commentData[i])
      }
      console.log('setCommentDataToServer---------', comments)

      setCommentContent(comments)
    })
    .catch(err => console.log(err))
  }

  const handleAddComment = (commentBody) => {
    var today = new Date().toLocaleDateString(undefined, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    const comment = {
      blogId: blogContent[0]._id,
      parentId: 0,
      userName: socialAuth.profile.name,
      avatarUrl: socialAuth.profile.profilePicURL,
      email: socialAuth.profile.email,
      content: commentBody,
      commentDate: today
    };

    setCommentDataToServer(comment)
  }

  const handleCommentPost = (id, selfId) => {
    var today = new Date().toLocaleDateString(undefined, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    const comment = {
      blogId: blogContent[0]._id,
      parentId: selfId,
      userName: socialAuth.profile.name,
      avatarUrl: socialAuth.profile.profilePicURL,
      email: socialAuth.profile.email,
      content: document.getElementById(id).childNodes[0].value,
      commentDate: today,
      parentKey: id,
    };

    setCommentDataToServer(comment)
    document.getElementById(id).style.display = 'none'
    document.getElementById(id).childNodes[0].value = ''
  }
  const handleCommentReply = (id) => {
    document.getElementById(id).style.display = 'inline-block'
  }
  const handleCommentCancel = (id, parentId) => {
    document.getElementById(id).style.display = 'none'
  }

  function getCommentSequenceData(commentData, padding = 0) {
      commentData.padding = padding
      comments.push(commentData)

      if (commentData.children.length > 0) {
        for(let i = 0; i < commentData.children.length; i ++) {
          getCommentSequenceData(commentData.children[i], padding+50)
        }
      }
  }

  const commentNode = Array.isArray(commentContent) ? 
    commentContent.map((comment)=>{
      if (!comment.commentAllow) return

      return (
        <div className="CommentLevel top" key={comment.childId} style={{ paddingLeft: comment.padding }}>
          <div className="Comment">
            <div className="Avatar" style={{backgroundImage: `url(${comment.avatarUrl})`, borderRadius: '20px', width: '40px', height: '40px'}}>
            </div>
            <div className="right">
              <div className="top">
                <p> {comment.userName} </p>
              </div>
              <div className="message">
                <p> {comment.content} </p>
              </div>
              <div className="bottom">
                <div className="left">
                  <span className="date desktopOnly">{comment.commentDate}</span>
                  { socialAuth.auth ? 
                  <button className="reply" onClick={() => handleCommentReply(comment._id)}> Reply</button>
                  : null }
                </div>
              </div>
              { socialAuth.auth ?
              <div id={comment._id} className="" style={{display:'none', width: '100%'}}>
                <textarea className="commentTextarea" placeholder="Comment:" ></textarea>
                <button className="reply" onClick={() => handleCommentPost(comment._id, comment.selfId)}> Post</button>
                <button className="reply" onClick={() => handleCommentCancel(comment._id)}> Cancel</button>
              </div>
              : null }
            </div>
          </div>
        </div>
      )
  }) : null
  
  const commentNew =    
    <div className="read" >
        <button className="Button primary big" onClick={JwModal.open('auth-modal')} >
            Comment Now
        </button>
        {commentNode}
    </div>
   
  return (
    <div className="main-content">
      <PageTitle title="Blog Details" bgimg="/images/bg/services.jpg"/>
      
      <section>
        <div className="container mt-30 mb-30 pt-30 pb-30">
          <div className="row">
            <div className="col-md-12">
              <div className="filter">
                <button className="Button iconButton noPadding">
                  <div className="icon">
                    <svg id="Réteg_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12">
                      <path id="path-1_1_" d="M5.9 0c.4 0 .9.3 1 .7s.1.9-.2 1.2L2.7 6l4 4.1c.3.5.3 1.1-.1 1.6s-1.1.4-1.5.1l-4.8-5c-.4-.4-.4-1.2 0-1.6L5.1.3c.2-.2.5-.3.8-.3z"></path>
                    </svg>
                  </div>
                  <Link to={`/post`} >
                    <div className="desktopOnly goBackLink" onClick={(e)=>goBack(e)}>Back to News</div>
                  </Link>
                </button>
              </div>
              <div className="blog-posts single-post">   
                <article className="post clearfix mb-0">
                  <h2 id="basics"> { blogContent ? blogContent[0].blogTitle : null } </h2>
                  <p><img src={ blogContent ? blogContent[0].blogImage : null } /></p>
                  <p>{ blogContent ? blogContent[0].blogDescription : null }</p>
                  <p><img src={ blogContent ? blogContent[0].blogOtherImage : null } /></p>

                  { !socialAuth.auth ? commentNew : 
                    <div>
                      <div className="cell">
                        <h2>Join The Discussion</h2>
                        <div className="comment-box">
                          <CommentForm addComment={handleAddComment}/>
                        </div>
                      </div>
                      {commentNode}
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