const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');
const crypto = require ('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static("client/public"));
// Set up promises with mongoose
mongoose.Promise = global.Promise;

//----edit
// Mongo URI
const mongoURI = "mongodb://localhost/EHF";
const conn = mongoose.createConnection(mongoURI);
//----edit end

mongoose.connect( process.env.MONGODB_URI || mongoURI)

const routes = require("./controllers/ehfController");
app.use(routes);

let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
      // bucketName should match this collection name
  gfs.collection('uploads');
})

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          metadata: file.originalname.slice(0,-4),
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

// upload images
app.post('/api/uploads', upload.single('file'), (req, res) => {
  console.log(res.json())
  // res.redirect('/');
})

//read all getImages
app.get('/api/files', (req, res) =>{
  gfs.files.find().toArray((err, files)=>{
    // Check if files
    if(!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
    //Files exist
    return res.json(files);
  });
});

//----find last image by ID
app.get('/api/fileid', (req, res) =>{
  gfs.files.find().sort({_id:-1}).limit(1).toArray((err, files)=>{
    if(!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
    //Files exist
    return res.json(files);
  });
});
//-------------

app.delete('/api/files/:id', (req, res) => {
  gfs.files.findByIdAndRemove({ _id: req.params.id })

})

// @route GET /image/:filename
// @desc Display image
    app.get('/api/image/:filename', (req, res) =>{
      gfs.files.findOne({filename: req.params.filename}, (err, file) => {
        if(!file || file.length === 0) {
          return res.status(404).json({
            err: 'No files exist'
          });
        }
        // Check if image
        if(file.contentType === 'image/jpeg' || file.contentType === 'img/png'){
          // Read output to browser
          const readstream = gfs.createReadStream(file.filename);
          readstream.pipe(res);
          } else {
          res.status(404).json({
            err: 'Not an image'
          })
        }
      })
    });
//----edit end

    app.get('/api/images/:metadata', (req, res) =>{
        console.log(req.params.metadata);
      gfs.files.findOne({metadata: req.params.metadata}, (err, file) => {
    console.log(file);
    if(file.contentType === 'image/jpeg' || file.contentType === 'img/png'){
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      })
    }
  })
});

//------------------------------------------------------------------------------
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
