// const mongoose = require("mongoose");
// const multer = require('multer');
// const express = require("express");
// const app = express();
//
// const Schema = mongoose.Schema;
//
// const multerConfig = {
//   storage: multer.diskStorage({
//
//     destination: function(req, file, next){
//       next(null, './photo-storage');
//     },
//
//     filename: function(req, file, next){
//       console.log(file);
//       const ext = file.mimetype.split('/')[1];
//       next(null, file.fieldname + '-' + Date.now() + '.'+ext);
//     }
//   }),
//
//   fileFilter: function(req, file, next){
//         if(!file){
//           next();
//         }
//
//       const image = file.mimetype.startsWith('image/');
//       if(image){
//         console.log('photo uploaded');
//         next(null, true);
//       }else{
//         console.log("file not supported")
//         return next();
//       }
//   }
// };
//
//
//   app.get('/api/imgthis', function(req, res){
//     res.render('index.html');
//   });
//
//   app.post('/api/uploadthis', multer(multerConfig).single('photo'),function(req, res){
//       res.send('Complete!');
//   }
// );
