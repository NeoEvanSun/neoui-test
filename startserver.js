var express = require('express');
var app = express();
app.use(express.static(__dirname+'/static'));
app.listen(8090);
console.log('listen on 8090');
