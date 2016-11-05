const express    = require('express')
const bodyParser = require('body-parser')
const Converter = require('./express-converter/index.js')


const app = express()

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
app.listen(3030, 0.0.0.0);
