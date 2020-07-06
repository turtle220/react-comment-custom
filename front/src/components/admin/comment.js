import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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

    let value = this.state.contentHTML;
 
    console.log(value,"value")
    
    const API_URL = process.env.NODE_ENV === 'production'
        ? 'https://samdivtech.com'
        : 'http://localhost:3111'
  
    fetch(`${API_URL}/admin/save`, {
      method: 'post',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
      body: JSON.stringify({ comment: value})
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

      <ReactQuill
        modules={this.modules}
        theme="snow"
        value={this.state.contentHTML}
        onChange={this.onChangeText}
      ></ReactQuill>
      {/* <JwModal id="htmldialog">
        <Login html={this.state.contentHTML} />
      </JwModal> */}
      <button className="button1" type="button" style={{marginLeft  :'50%'}} onClick={this.save}>Save</button>
      </>
  }
}


export default Comment;
