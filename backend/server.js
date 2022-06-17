const express = require('express');
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, '..',"build")))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..',"build",'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is up on port " + port);
});