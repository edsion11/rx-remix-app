const { createRequestHandler } = require("@remix-run/vercel");

module.exports = createRequestHandler({
  build: require("./_build")
});
// module.exports = function (req, res) {
//   res.send('Hello!');
// };
