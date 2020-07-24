import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import Config from '../../config.json';

import "react-quill/dist/quill.snow.css";
import './admin.css';

function BlogList (props) {
  const [checked, setChecked] = React.useState(true);
    const [blogContent, setBlogContent] = useState();
    const [editable, setEditable] = useState({ id: '', edit: false})

    useEffect(() => {
        fetch(`${Config.serverapi}/getBlogList`, {
        method: 'post',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
        // body: JSON.stringify({ flag: checked })
        })
        .then(res =>
            res.json()
        )
        .then(data => {
            console.log('getBlogList-------------: ',data)
            setBlogContent(data);
        })
        .catch(err => console.log(err))

    },[]);

    const handleEdit = (id) => {
      setEditable({ id: id, edit: true })
    }
    const handleSave = (id) => {
      const blogTitle = document.getElementById(id).childNodes[1].textContent
      const blogDescription = document.getElementById(id).childNodes[2].textContent
      const blogImage = document.getElementById(id).childNodes[3].textContent

      fetch(`${Config.serverapi}/updateBlog`, {
        method: 'post',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({ updateId: id, blogTitle, blogDescription, blogImage})
      })
      .then(data => {
        alert('Success')
      })
      .catch(err => console.log(err))

      setEditable({ id: '', edit: false })
    }

    console.log('----------',editable)
    let list =  Array.isArray(blogContent) ? 
        blogContent.map((blog, key) => {
          const editStatus = editable.id === blog._id ? editable.edit : 'false';
            return(
                <tr id={blog._id}>
                    <td className="col-md-1">{ key }</td>
                    <td className="col-md-2" contenteditable={`${editStatus}`}>{ blog.blogTitle }</td>
                    <td className="col-md-5" contenteditable={`${editStatus}`}>{ blog.blogDescription }</td>
                    <td className="col-md-3" contenteditable={`${editStatus}`}>{ blog.blogImage }</td>      
                    <td className="col-md-1" style={{textAlign: 'center'}} >
                      <button tabindex="0" type="button" className="blogEdit" onClick={()=>{handleEdit(blog._id)}}>
                        <svg viewBox="0 0 24 24">
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                        </svg>
                      </button>
                      <button tabindex="0" type="button" className="blogEdit blogSave" onClick={()=>{handleSave(blog._id)}}>
                        <img style={{ width: '60%',height: '60%'}} src="https://www.flaticon.com/premium-icon/icons/svg/2541/2541652.svg" />
                      </button>
                    </td>      
                </tr>
            );
    }) : null;

    return (
        <div className="blogList" >
            <table id="customers" className="col-sm-12">
                <tr>
                    <th className="col-md-1">{ 'No' }</th>
                    <th className="col-md-2">{ 'Title' }</th>
                    <th className="col-md-5">{ 'Description' }</th>
                    <th className="col-md-3">{ 'ImageURL' }</th>      
                    <th className="col-md-1">{ 'Edit' }</th>      
                </tr>
                { list }
            </table>
         
        </div>
    );
}


export default BlogList;
