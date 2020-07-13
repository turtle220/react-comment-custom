import React, {useState} from 'react';
// const [userName, setUserName] = useState(); 
// const [picUrl, setPicUrl] = useState();

const ChildComponent = ({user, onReply}) => {
  const [flag, setFlag] = useState(false);
  const [textContent, setTextContent] = useState();
  if (!user) return null;
  console.log('---test: ', user)
  const onChangeText = (e)=>{
    console.log("*******changetext:",e.target.value)
    setTextContent(e.target.value);
    console.log('-----content: ', textContent)
  }

  return (
    <>
      <div className="comment-content" >
        <div className="comment-wrapper">
          <div id="comment-7" className="commnet-anchor"></div>
          <div className="comment-list">
            <img alt ='' className="comment-avartar-person" src={user.profilePicURL}></img>
            <div className="comment-detail" >
              <div>
                <p className="comment-name"> {user.username}</p>
                {/* {user.profile ? <button className="btn btn-success reply" onClick={()=>childcomment(key)}>Reply1</button>
                :null} */}
                <button className="btn btn-success reply" onClick={()=>setFlag(true)}>Reply</button>
              </div>
              {/* {textarea} */}
              <p> { user.usercontent } </p>
            </div>
          </div>
        </div>   
      </div>
      {flag ? (
        <div className="comment-wrapper child">
          <div className="comment-list">
            {/* <img className="comment-avartar-person" src={user.profile.profilePicURL}></img>  */}
            <img alt='' className="comment-avartar-person"></img>
            <div className="comment-detail" >
              <div> 
              {/* <p className="comment-name"> {user.profile.name}</p> */}
              <p className="comment-name">Michael</p>
              <button className="btn btn-success reply" onClick={() => onReply(textContent)}>dddd</button>
              </div> 
              <textarea className="comment-text" onChange={onChangeText}> </textarea>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ChildComponent;