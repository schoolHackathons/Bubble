const stitch = require("mongodb-stitch"); // Set-up the MongoDB connection
const chance = require("chance").Chance(); // Package for random variables

// Seeds for the random data
//const LOCATIONS = ["Store 1", "Store 2", "Store 3"];
//const TOPPINGS = ["Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra cheese", "Black olives", "Green peppers", "Pineapple","Spinach"];
//const SIZES = ["Personal", "Small", "Medium", "Large", "X-tra Large"];

var bubbleID = 0;
var bubbleAccess = "@mail.usf.edu";
var bubbleName = "USF Algo";
var bubbleFile = "awefawe";
var bubbleTags = ["usf", "algo", "algorithm", "algorithm"];

var userEmail = "zprimus@mail.usf.edu";
var userPassword = "Hackabull";

// Set-up DB Connection
var clientPromise = stitch.StitchClientFactory.create("bubble-dplko");


// Send sample data while within this loop
function generateBubble(bubbleData){
  // needs to get index of last item in database and add 1
  bubbleID = bubbleID + 1;

  // Create a random transaction
  var bubble = {
    "id" : bubbleID,
    "accessKey" : bubbleAccess,
    "name" : bubbleName,
    "file" : bubbleFile,
    "tags" : bubbleTags
    };

  // Print to the console
  console.log(bubble);

  // Insert into MongoDB
  bubbleData.insertOne(bubble);

  return;
}

function userInfo(userData){
  // Create a random transaction
  var user = {
    "email" : userEmail,
    "password" : userPassword
    };

  // Print to the console
  console.log(user);

  // Insert into MongoDB
 userData.insertOne(user);

 return;
}

function addFile(bubbleData){
  // Create a random transaction
  var bubble = {
    "id" : bubbleID,
    "accessKey" : bubbleAccess,
    "name" : bubbleName,
    "file" : bubbleFile,
    "tags" : bubbleTags
    };

  // Print to the console
  //console.log(bubble);

  // Insert into MongoDB
 //bubbleData.updateOne(,bubble);
 return;
}

function filterAccess(bubbleData) {

    client.executeFunction("limitAccess", bubbleAccess)
    .then((documents) => {
        documents.forEach((document) => console.log(document));
    });

    //console.log(allBubbles);

    return;
}



clientPromise.then(client => {
  const db = client.service("mongodb", "mongodb-atlas").db("BubbleDB");
  const bubbleData = db.collection("BubbleCollection");
  const userData = db.collection("UserCollection");


  //const coll = mongodb.db("BubbleDB").collection("BubbleCollection");

  // Authenticate anonymously and then begin to load data
  //client.login()
  //.then(() => console.log('logged in as: ' + client.authedId()))
  //.catch(e => console.log('error: ', e));

  client.login().then(() => generateBubble(bubbleData))
  .then(() => userInfo(userData))
  .then(() => filterAccess(bubbleData));

  //generateBubble(bubbleData);
/*
  clientPromise.then(client =>client.auth.provider("google"))
  .then(() => console.log('logged in as: ' + client.authedId()))
  .catch(e => console.log('error: ', e));
*/
/*
  client.authenticate("google")
  .then(() => console.log('logged in as: ' + client.authedId()))
  .catch(e => console.log('error: ', e));
*/


  // Alternatively Use the API Key to load data more securely
  //client.authenticate("apiKey", "pTnJE7Wjp5k7FurAuEcdooulOUllptTS9CHuMZMu9KgklUTBNPHGe2Rug02VYd1f").then(() => generateBubble(bubbleData));
  //client.authenticate("google").then(() => generateBubble(userData)).catch(e => console.log('error: ', e));

  //generateBubble(bubbleData);
})
