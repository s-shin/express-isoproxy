# express-isoproxy

[Express](https://github.com/strongloop/express/) middleware for [IsoProxy](https://github.com/s-shin/isoproxy).

## Usage

```js
var express = require("express");
var bodyParser = require("body-parser");
var expressIsoProxy = require("express-isoproxy");
var proxy = require("./proxy");

var app = express();
// express-isoproxy depends on body-parser.
app.use(bodyParser.json());
app.use(expressIsoProxy(proxy));
```

## Run Example

```
npm run build_example
npm run start_example
```

## License

The MIT License.
