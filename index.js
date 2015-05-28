/**
 * Express middleware for IsoProxy.
 * https://github.com/s-shin/isoproxy
 */

/**
 * @param {IsoProxy} proxy IsoProxy instance.
 */
module.exports = function(proxy) {
  return function expressIsoProxy(req, res, next) {
    if (!req.body) {
      throw new Error("req.body have to be set by such as bodyParser.");
    }
    var processJsonrpcRequest = proxy.routes[req.path];
    if (req.method === "POST" && processJsonrpcRequest) {
      processJsonrpcRequest(req.body).then(function(jsonrpcResponse) {
        res.send(jsonrpcResponse);
      });
      return;
    }
    next();
  };
};
