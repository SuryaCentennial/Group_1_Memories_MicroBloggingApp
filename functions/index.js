const functions = require("firebase-functions");
const express = require('express');
const app = express();

const FBAuth = require('./util/fbAuth');


const {getAllScreams, postOneScream, getScream, commentOnScream, likeScream, unlikeScream, deleteScream} = require('./handlers/screams');
const {signup,login, uploadImage, addUserDetails, getAuthenticatedUser} = require('./handlers/users');

//scream routes
app.get('/screams',getAllScreams);
app.post('/scream', FBAuth,postOneScream);
app.get('/scream/:screamId', getScream);
app.post('/scream/:screamId/comment', FBAuth, commentOnScream);
app.get('/scream/:screamId/like', FBAuth, likeScream);
app.get('/scream/:screamId/unlike', FBAuth, unlikeScream);
app.delete('/scream/:screamId', FBAuth, deleteScream);

//users route
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);





exports.api = functions.https.onRequest(app);