const stitch = require("mongodb-stitch"); // Set-up the MongoDB connection
const chance = require("chance").Chance(); // Package for random variables

// Seeds for the random data
//const LOCATIONS = ["Store 1", "Store 2", "Store 3"];
//const TOPPINGS = ["Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra cheese", "Black olives", "Green peppers", "Pineapple","Spinach"];
//const SIZES = ["Personal", "Small", "Medium", "Large", "X-tra Large"];
const bubbleID = 1;
const bubbleAccess = "@mail.usf.edu";
const bubbleName = "USF Algo";
const bubbleFile = "Algo Exam 1 Spring 2017";
const bubbleTags = ["usf", "algo", "algorithm", "algorithm"];
// Set-up DB Connection
const clientPromise = stitch.StitchClientFactory.create("bubble-dplko");

// Send sample data while within this loop
function generateBubble(bubbleData){
  // Create a random transaction
  const bubble = {
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
}

clientPromise.then(client => {
  const db = client.service("mongodb", "mongodb-atlas").db("BubbleDB");
  const bubbleData = db.collection("BubbleCollection");

  // Authenticate anonymously and then begin to load data
  client.login().then(() => generateBubble(bubbleData));

  // Alternatively Use the API Key to load data more securely
  // client.authenticate("apiKey", "<YOUR API KEY>").then(() => generateReceipts(salesData));
})
