// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
// dependencies
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3030;
const server = app.listen(port, listening);
const {Temp} = main.temp;

//callback function
function listening(){
     console.log("server running");
     console.log(`running on localhost: ${port}`);
}

// get routes and requests

app.get('/getData', getTemp)

function getTemp(req, res){
  res.send(projectData);
}


// post routes

const addData = [];
app.post('/data', addData);

function addData(req,res){

  NewInput = {
    temp :request.body.temp,
    feelings : request.body.feelings,
    date :request.body.date,
  }

  addData.push(NewInput);
  res.send(addData);
  console.log(addData);
}
