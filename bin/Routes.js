const router = require("express").Router();
const fs = require("fs");
const logger = require("./logger");

function ROOT(route, to) {
  return GET(route, to);
}

function GET(route, to) {
  const cont = to.split("#")[0];
  const controller_name = cont + "_controller.js";
  const controller = require("../app/controllers/" + controller_name);
  const function_name = to.split("#")[1];
  const variables = (new controller)[function_name]();

  router.get(route, (req, res) => {
    const request_time = new Date();
    console.log("\nStarted GET", `\"${route}\"`, "at", request_time.toLocaleString('en-AU'));
    const file_exists = fs.existsSync(`./app/views/${cont}/${function_name}.html`);
    if(file_exists) {
      res.status(200).render("../app/views/layouts/application.html", { page: `../${cont}/${function_name}.html`, ...variables } )
      console.log("Rendered", `../app/views/${cont}/${function_name} at`, (new Date()).toLocaleString('en-AU'));
      const render_time = new Date();
      console.log("Completed", 200, "OK at", render_time.toLocaleString('en-AU'), "in", render_time.getTime() - request_time.getTime(), "ms\n");
    }
    else {
      console.log("Completed", 404, "Not Found", "at", (new Date()).toLocaleString('en-AU'));
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