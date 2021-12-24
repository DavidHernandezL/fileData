var express = require('express');
var cors = require('cors');
var multer = require('multer');
var path = require('path');

require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
//multer config
app.use(multer({dest: path.join(__dirname,'/public')}).single('upfile'))


app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});


//Code created by David Hernandez (RaveFuzzball)
app.post('/api/fileanalyse',(req , res) => {
  var fileName = req.file.originalname;
  var fileType = req.file.mimetype;
  var fileSize = req.file.size;
  res.json({"name":fileName,"type":fileType,"size":fileSize});
});