const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', 4343);

app.get('/', (req, res) => res.redirect('/main'));
app.use('/', express.static('./public'));

app.get('/main', (req, res) => res.sendFile(__dirname + '/public/main.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/public/about.html'));
app.get('/activity', (req, res) => res.sendFile(__dirname + '/public/activity.html'));
app.get('/contact', (req, res) => res.sendFile(__dirname + '/public/contact.html'));
app.get('/member', (req, res) => res.sendFile(__dirname + '/public/member.html'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
    console.log('Node app is running on port:', app.get('port'));
});