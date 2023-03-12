const express = require('express')
const app = express()
const port = 8000
const cloudinary = require('cloudinary').v2;
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file.buffer.toString('base64');
  cloudinary.uploader.upload(`data:image/png;base64,${file}`, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send(error.message);
    } else {
      console.log(result);
    
    }
  });
});

// Configuration 
cloudinary.config({
  cloud_name: "dj1jyl46q",
  api_key: "282441591922432",
  api_secret: "zD2mxxbGgXUeVe0kNUt2gwA4Mgk"
});

const Cors=require('cors')
const Connect =require("./dbConnect");
const Router=require('./userRoutes')
Connect()
app.use(Cors())
app.use(express.json())

app.use('/api',Router)
app.get('/images', (req, res) => {
    cloudinary.api.resources((error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to get images' });
      } else {
        const images = result.resources;
        res.json(images);
      }
    });
  });
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))