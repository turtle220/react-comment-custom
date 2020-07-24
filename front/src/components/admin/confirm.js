import React, { useEffect, useState }  from "react";
import Config from '../../config.json';

import './admin.css';
function Confirm(props) {

    const [checked, setChecked] = useState(true);
    const [userData, setUserData] = useState();

    useEffect(() => {
        getCommentListWithBlogName()
    },[]);
    
    function getCommentListWithBlogName() {
        fetch(`${Config.serverapi}/getCommentListWithBlogName`, {
            method: 'post',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log('flag*********: ',data)
            setUserData(data);
        })
        .catch(err => console.log(err))
    }
    const handleConfirm = (id)=>{
        fetch(`${Config.serverapi}/updateCommentAllow`, {
            method: 'post',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updateId: id })
        })
        .then(data => {
            alert('Success')
            getCommentListWithBlogName()
        })
        .catch(err => console.log(err))
    }

    let list =  Array.isArray(userData) ? 
    userData.map((user, key) => {
            return(
                <tr id={user._id}>
                    <td className="col-md-1" >{ key }</td>
                    <td className="col-md-2" >{ user.blogTitle}</td>
                    <td className="col-md-2" >{ user.userName}</td>
                    <td className="col-md-5" >{ user.content}</td>
                    <td className="col-md-1" >{ user.commentDate}</td>
                    <td className="col-md-1" style={{textAlign: 'center'}} >
                        <button className="btn btn-primary" onClick={()=>{handleConfirm(user._id)}} > Confirm </button>
                    </td>      
                </tr>
            );
    }) : null;

    return (
        <div className="blogList" >
            <table id="customers" className="col-sm-12">
                <tr>
                    <th className="col-md-1">{ 'No' }</th>
                    <th className="col-md-2">{ 'BlogTitle' }</th>
                    <th className="col-md-2">{ 'UserName' }</th>
                    <th className="col-md-5">{ 'Description' }</th>
                    <th className="col-md-1">{ 'CommentDate' }</th>
                    <th className="col-md-1">{ 'Performance' }</th>      
                </tr>
                { list }
            </table>
         
        </div>
    );
}

export default Confirm;