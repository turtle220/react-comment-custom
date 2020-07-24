import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './admin.css';
import Config from '../../config.json';

class InsertBlog extends React.Component {
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
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
      ],
      handlers: {
        
      },

    }
  }
  onChangeText = (html, delta, source, editor) => {
    this.setState({contentHTML: html})
  }
  save = ()=>{

    let blogTitle = document.getElementById('title').value + "";
    let blogDescription = document.getElementById('description').value;
    let blogImage = document.getElementById('Image').value;
    let blogOtherImage = document.getElementById('otherImage').value;
    
    let value = this.state.contentHTML;

    fetch(`${Config.serverapi}/insertBlog`, {
      method: 'post',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
      body: JSON.stringify({ blogTitle, blogDescription, blogImage, blogOtherImage})
    })
    .then(res => {
      if (res.status === 200)
        alert('Success')
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div style={{ padding: '70px'}}>
        <div class="form-group row">
          <label htmlFor="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Title</label>
          <div class="col-sm-10">
            <input type="input" class="form-control form-control-sm" id="title" placeholder="" />
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Description</label>
          <div class="col-sm-10">
            <textarea id="description" rows={20} style={{width:'100%'}}></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Image</label>
          <div class="col-sm-10">
            <input type="input" class="form-control form-control-sm" id="Image" placeholder="" />
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Second Image</label>
          <div class="col-sm-10">
            <input type="input" class="form-control form-control-sm" id="otherImage" placeholder="" />
          </div>
        </div>
        
        <button className="btn btn-primary" style={{float:"right"}} type="submit"  onClick={this.save}>Save</button>
      </div>
    )
  }
}


export default InsertBlog;
