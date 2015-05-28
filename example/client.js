var proxy = require("./proxy");

window.app = {
  ex1: function() {
    proxy.api.math.add(1, 2).then(function(result) {
      console.log(result);
    }, function(error) {
      console.log(error);
    });
  },
  ex2: function() {
    proxy.api.math.sub(1, 2).then(function(result) {
      console.log(result);
    }, function(error) {
      console.log(error);
    });
  }
};
