const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const STATUS = {
  "404": "Not Found",
  "200": "OK",
  "201": "Created"
}

function ROOT(route, to) {
  return GET(route, to);
}

function GET(route, to) {
  const controller_name = to.split("#")[0] + "_controller.js";
  const controller = require("../controllers/" + controller_name);
  const function_name = to.split("#")[1];
  const func = (new controller)[function_name];

  router.get(route, (req, res) => {
    console.log("Started", route);
    const file_exists = fs.existsSync(`./views/${function_name}.html`);
    if(file_exists) {
      console.log("Returned", 200, "OK")
      res.status(200).render(`../views/${function_name}`, func())
    }
    else {
      console.log("Returned", 200, "OK")
      res.status(404).render(`../public/404`)
    }
    
  })
}

function PUT(route, to) {
  
}

function POST(route, to) {
  
}

function DELETE(route, to) {
  
}

function PATCH(route, to) {
  return PUT(route, to)
}

module.exports = { ROOT, GET, POST, PUT, PATCH, DELETE, router };