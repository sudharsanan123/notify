const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://mailtosudharsanan:sudhar@cluster1.h0pfpdy.mongodb.net/")


app.listen(3001,()=>{
  console.log('listeningsssdvnkjsdvbn on')
});