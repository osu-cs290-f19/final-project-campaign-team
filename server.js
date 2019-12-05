var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var campaignData = require('./campaignData');

var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'NULL'}));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;



app.get('/', function(req, res){
  res.status(200).sendFile(__dirname + '/public/index.html');
})


app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404);
  res.sendFile(__dirname + '/public/404.html');
  console.log(req);
  // console.log(res);
  //res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function() {
  console.log('== Server is listening on port', port);
});
