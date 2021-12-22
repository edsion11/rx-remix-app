const { createRequestHandler } = require("@remix-run/vercel");
var obj  ={a:1}
with(obj){a:2}

module.exports = createRequestHandler({
  build: require("./_build")
});
