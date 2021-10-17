const router = require("express").Router();

function ROOT(route, to) {
  return GET(route, to);
}

function GET(route, to) {
  const controller_name = to.split("#")[0] + "_controller.js";
  const r = require("../controllers/" + controller_name);
  const function_name = to.split("#")[1];
  const func = (new r)[function_name]

  router.get(route, (req, res) => {
    res.status(200).render(`../views/${function_name}`, func())
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