'use strict';

// Requires
const express = require('express');
// Instantiation
const app = express();
// Set up
const PORT = process.env.PORT || 3150;
app.use(express.static('./public'));
app.get('/*', function (req, res){
  res.sendFile('index.html', {root: './public'});
});
//Postgres auth
const conString = 'postgres://postgres:dingodb@localhost'

//Start server notification
app.listen(PORT, function() {
  console.log(`Server started on port: ${PORT}`);
})
