const { Controller } = require("../../bin/Controller")

class Pages extends Controller {
  
  index() {
    return {
      name: "Punit"
    }
  }

  about() {}

  gunc() {}
}

module.exports = Pages;