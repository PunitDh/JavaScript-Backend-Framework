const { ROOT, GET, PUT, PATCH, POST, DELETE } = require("../bin/Routes")

function Routes() {

  // Put all your routes here
  ROOT("/", to="pages#index")
  GET("/about", "pages#about")
}

module.exports = Routes