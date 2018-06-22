/ Redux action
export function uploadSuccess({ data }) {
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    data,
  };
}

export function uploadFail(error) {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    error,
  };
}

export function uploadDocumentRequest({ file, name }) {
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);

  return (dispatch) => {
    axios.post('/files', data)
      .then(response => dispatch(uploadSuccess(response))
      .catch(error => dispatch(uploadFail(error));
  };
}

/*
 ... A lot of Redux / React boilerplate happens here
 like mapDispatchToProps and mapStateToProps and @connect ...
*/

// Component method
handleFileUpload({ file }) {
  const file = files[0];
  this.props.actions.uploadRequest({
     file,
     name: 'Awesome Cat Pic'
  })
}

// Component render
<input type="file" onChange={this.handleFileUpload} />

//---------------------server---------------------------
import express from 'express';
import axios from 'axios';
import multer from 'multer';

const app = express();

const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/files', upload.single('file'), (req, res) => {
 const file = req.file; // file passed from client
 const meta = req.body; // all other values passed from the client, like name, etc..

 axios({
    url: `https://api.myrest.com/uploads`,
    method: 'post',
    data: {
      file,
      name: meta.name,
    },
  })
   .then(response => res.status(200).json(response.data.data))
   .catch((error) => res.status(500).json(error.response.data));
});









//-----------------------update file 2---------------------------------
import axios from 'axios';
import cloudinary from 'cloudinary';

export default function fileUploadMiddleware(req, res) {
  cloudinary.uploader.upload_stream((result) => {
    axios({
      url: '/api/upload', //API endpoint that needs file URL from CDN
      method: 'post',
      data: {
        url: result.secure_url,
        name: req.body.name,
        description: req.body.description,
      },
    }).then((response) => {
      res.status(200).json(response.data.data);
    }).catch((error) => {
      res.status(500).json(error.response.data);
    });
  }).end(req.file.buffer);
}
//------------------
import multer from 'multer';
import cloudinary from 'cloudinary';
import fileUploadMiddleware from './fileUploadMiddleware';

/* your servrer init and express code here */

cloudinary.config({
  cloud_name: 'xxx',
  api_key: 'xxxx',
  api_secret: 'xxxxx',
});

/**
  * Multer config for file upload
*/

const storage = multer.memoryStorage();
const upload = multer({ storage });
app.post('/files', upload.single('file'), fileUploadMiddleware);

/* the rest of your routes app.get('*', () => {}) */
/* the rest of your server code */
//-----------------------
import React, { Component } from 'react';
import axios from 'axios';

class uploadMyFile extends Component {
  handleUploadFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('name', 'some value user types');
    data.append('description', 'some value user types');
    // '/files' is your node.js route that triggers our middleware
    axios.post('/files', data).then((response) => {
      console.log(response); // do something with the response
    });

    render() {
      <div>
        <input type="file" onChange={this.handleUploadFile} />
      </div>
    }
}

export default uploadMyFile;
