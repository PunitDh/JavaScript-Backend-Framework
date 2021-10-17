const { Controller } = require("../bin/Controller")

class Pages extends Controller {
  
  index() {
    return {
      name: "Punit"
    }
  }

  about() {}
}

module.exports = Pages;