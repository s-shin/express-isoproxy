var IsoProxy = require("isoproxy");

var proxy = new IsoProxy({
  root: "/api",
  isServer: (typeof window === "undefined")
});

proxy.setInterfaces({
  math: ["add", "sub"]
});

proxy.setImplementations({
  math: {
    add: function(x, y) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(x + y);
        }, 10);
      });
    },
    sub: function(x, y) {
      return x - y;
    }
  }
});

module.exports = proxy;
