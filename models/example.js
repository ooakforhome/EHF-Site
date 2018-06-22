var pic = new picSchema(
  { image:
      { data: Buffer, contentType: String }
  }
);


app.use(multer({ dest: ‘./uploads/’,
 rename: function (fieldname, filename) {
   return filename;
 },
}));


app.post(‘/api/picture_upload’,function(req,res){
 var newPic = new pic();
 newPic.image.data = fs.readFileSync(req.files.userPhoto.path)
 newPic.image.contentType = ‘image/png’;
 newPic.save();
});
