var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var campaignData = require('./campaignData');

var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/newPost/sendPost', function (req, res, next){
  console.log(req.body);
  if (req.body && req.body.title && req.body.imageURL && req.body.summary && req.body.description && req.body.tags) {
    campaignData.push({
      title: req.body.title,
      summary: req.body.summary,
      imageURL: req.body.imageURL,
      description: req.body.description,
      tags: req.body.tags
    });
    fs.writeFile(
      __dirname + '/campaignData.json',
      JSON.stringify(campaignData, null, 2),
      function (err){
        if (!err){
          res.status(200).send();
        } else {
          res.status(500).send("Failed to write data on server side.");
        }
      }
    );
  } else {
    res.status(400).send("Incomplete information, failed to write to server.");
  }
})

app.get('/', function(req, res){
  res.status(200).render('indexTemplate', {campaignData: campaignData});
})

app.get('/newPost', function(req, res){
  res.status(200).render('newPost');
})


app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).render('404');
  //res.sendFile(__dirname + '/public/404.html');
  console.log(req.url);
  // console.log(res);
  //res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function() {
  console.log('== Server is listening on port', port);
});
