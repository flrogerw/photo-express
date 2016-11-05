const express    = require('express')
const bodyParser = require('body-parser')
const Converter = require('./express-converter/index.js')


const app = express()

// parse application/json
app.use(bodyParser.json())

app.post('/overlay', (req, res) => {

var converter = new Converter();

converter.on('done', (data) => {
  res.send(data);
});
converter.on('error', (err) => {
  res.send(err);
});

    converter.convert(req.body);
});

app.listen(3030);






/*
{
"s3_bucket":"dev.node.express",
"s3_key":"05krmtnakkcvr7gg9hp5eao5jdt1t5l2t9pu3no1/ANDY_5TH_GRADE_001.jpg",
"products":[{
  "id":79,
  "name":"goprint-home",
  "bucket":"onepic.photoandgo.com",
  "path":"productpreview/79/",
  "horizontal_ratio":0.814393939393939,
  "vertical_ratio":1.26279069767442,
  "horizontal_overlay_image":"GoPrinttHorizontal2.png",
  "horizontal_geometry":"+230+164",
  "vertical_geometry":"+230+91",
  "horizontal_resize":"528x430!",
  "vertical_resize":"430x543!",
  "vertical_overlay_image":"GoPrintVertical2.png"
}],
"image": {
  "orientation": "vertical",
  "location": "05krmtnakkcvr7gg9hp5eao5jdt1t5l2t9pu3no1",
  "bucket": "dev.node.express",
  "exif_orientation": 1,
  "width": 2388,
  "height": 2972
}
}
*/
