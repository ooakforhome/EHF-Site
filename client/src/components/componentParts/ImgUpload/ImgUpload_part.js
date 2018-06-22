import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";

export class ImgUpload extends Component {
  constructor (props){
    super(props)
        this.state = {
          file: ''
        }
        this.imageChange = this.imageChange.bind(this);
        this.imageSave = this.imageSave.bind(this);
  }

  imageChange(e) {
    e.preventDefault();
      this.setState({
        file: e.target.files[0]
      });
  }

  imageSave = e => {
    e.preventDefault();
    let formData = new FormData();

    formData.append('file', this.state.file);
    // console.log(this.state.file);
    API.uploadImg(formData)
    // console.log(formData);
    // e.target.reset()
  }

  render(){
    return(
      <div>
        <form
            encType="multipart/form-data"
            onSubmit={this.props.imageSave} >
          <input
            className="fileInput inlineBlk"
            type="file"
            name= "file"
            id="file"
            onChange={this.props.imageChange} />
           <button
           className="saveBtn inlineBlk"
           type="submit">
              save
           </button>
        </form>

      </div>
    )
  }
}
