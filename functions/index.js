const functions = require("firebase-functions");
const express = require('express');
const app = express();

const FBAuth = require('./util/fbAuth');

const {getAllScreams, postOneScream} = require('./handlers/screams');
const {signup,login, uploadImage, addUserDetails} = require('./handlers/users');

//users route
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);


//scream routes
app.get('/screams',getAllScreams);
app.post('/scream', FBAuth,postOneScream);


exports.api = functions.https.onRequest(app);