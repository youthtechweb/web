const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 4343);

app.use('/', express.static('./public'));

app.get('/:page', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
    console.log('Node app is running on port:', app.get('port'));
});