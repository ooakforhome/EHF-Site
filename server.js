const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");

const app = express();
const Port = process.env.Port || 3001;

// Setup express
app.use(bodyParser.json());
app.use(express.static("client/public"));

// Setup promises with mongoose
mongoose.Promise = global.Promise;

// Setup Mongo URI
const mongoURI = "mongodb://localhost/EHF";
const conn = mongoose.createConnection(mongoURI);

mongoose .connect (process.env.MONGODB_URI || mongoURI);

const routes = require("./controllers/ehfController");
app.use(routes);

// Setup for GridFS =======
let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
    // bucketName should match this collection name
  gfs.collection('uploads');
})

// Create storeage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if(err){
          return reject(err);
        }
        const filename = buf.toString('hex') +
        path.extname(file.originalname);
        const metainfo = file.originalname;
        const fileInfo = {
          filename: filename,
          metadata: metainfo,
          bucketName: 'uploads'
        };
        resolve (fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

// Upload Images ---------------------------
app.post('/api/uploads', upload.single('file'), (req,res) => {
  console.log(res.json())
  // res.redirect('/');
});

// Get all Images --------------------------
app.get('/api/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if(!files || files.length === 0){
      return res.status(404).json({
        err: "NO FILES EXIST"
      });
    }
    return res.json(files)
  });
});

// Get single Image by file name
app.get('/api/image/:filename', (req, res) => {
  gfs.files.findOne({filename: req.params.filename}, (err, file) => {
    if(!file || file.length === 0) {
      return res.status(404).json({
        err: "NO FILE EXIST"
      });
    }
    if(file.contentType === 'image/jpeg' || file.contentType === 'img/png'){
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "NOT AN IMAGE"
      })
    }
  })
});

app.delete('/files/:id', (req, res) => {
  gfs.remove({_id: req.params.id, root: 'uploads'}, (err, gridStore) => {
    if(err){
      return res.status(404).json({err: err})
    }
    console.log(res);
    //res.redirect('/');
  });
});


//-----------------send to local host ------------------------------------
app.listen(Port, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})
