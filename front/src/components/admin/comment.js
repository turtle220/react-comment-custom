import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './admin.css';
// import axios from 'axios';  

// import { JwModal }  from '../dialog/index'
// import Login  from '../dialog/login'
// import Config from '../../services/config';
// import Itemlist from './adminlist'

class Comment extends React.Component {
  state = {
    contentHTML:''
  }
  modules = {
    toolbar: {
      container: [
        [{ font: [] }, { header: [1, 2, 3, 4, 5, 6] }],
        [{ align: [] }, "direction"],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "super" }, { script: "sub" }],
        // ["blockquote", "code-block"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
        // ["code"]
      ],
      handlers: {
        // code:
        //   async() => {
        //     document.getElementById('htmldialog_content').value = this.state.contentHTML;
           
        //     const ret = await JwModal.open('htmldialog')();
        //     this.setState({contentHTML: ret})
            // window.localStorage.getItem('retVal')

            // console.log('ddd: ',window.localStorage.getItem('retVal'))
            // this.setState({contentHTML:window.localStorage.getItem('retVal')})
            // this.setState({contentHTML:'sdfsdf'})
            
          // },
      },

    }
  }
  onChangeText = (html, delta, source, editor) => {
    this.setState({contentHTML: html})
  }
  save = ()=>{

    let commentTitle = document.getElementById('title').value + "";
    let commentDes = document.getElementById('description').value;
    let commentImage = document.getElementById('Image').value;
    
    let value = this.state.contentHTML;
 
    console.log(commentTitle.toString(),"value")
    console.log(`${commentTitle}`,"value")
    console.log(`${commentTitle}`,"value")

    const API_URL = process.env.NODE_ENV === 'production'
        ? 'https://samdivtech.com'
        : 'http://localhost:3111'
  
    fetch(`${API_URL}/admin/save`, {
      method: 'post',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
      body: JSON.stringify({ comment: value, title: commentTitle, commentDes: commentDes, commentImage: commentImage})
    })
    .then(res =>
      res.json()
    )
    .then(data => {
      console.log('data ',data)
      
    })
    .catch(err => console.log(err))
  }

  render() {
    return <>

      {/* <ReactQuill
        modules={this.modules}
        theme="snow"
        value={this.state.contentHTML}
        onChange={this.onChangeText}
        style={{heigh:'120px'}}
      ></ReactQuill> */}
      {/* <div style={{width:'1000px', display: 'block'}}>
        <div style={{display: 'flex'}}><label>Title:</label><input></input></div>
        <div style={{display: 'flex'}}><label>Description:</label><input></input></div>
        <div style={{display: 'flex'}}><label>Image:</label><input></input></div>
      </div> */}
      {/* <div  */}
      <div style={{width:'700px'}}>
        <div class="form-group row">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Title</label>
          <div class="col-sm-10">
            <input type="input" class="form-control form-control-sm" id="title" placeholder="" />
          </div>
        </div>
        <div class="form-group row">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Description</label>
          <div class="col-sm-10">
            <textarea id="description" style={{width:'100%'}}></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Image</label>
          <div class="col-sm-10">
            <input type="input" class="form-control form-control-sm" id="Image" placeholder="" />
          </div>
        </div>
        
        <button className="btn btn-primary" style={{float:"right"}} type="submit"  onClick={this.save}>Save</button>
      </div>
   
      </>
  }
}


export default Comment;
