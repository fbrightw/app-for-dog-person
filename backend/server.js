const express = require("express");
const proxy = require("http-proxy-middleware");
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')

function data(login, password) {
  this.login = login;
  this.password = password;

}
const app = express();
app.use(cors())

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}))

// const {liked_list} = require("./controllers/liked_list")
//
// app.get("/liked_list", liked_list);

app.listen(5000, () => console.log("server on 5000 port"));

// app.use(proxy("/api/auth/login", {
//   "target": "<TARGET>",
//   "secure": false,
//   "logLevel": "debug",
//   "pathRewrite": {
//     "^/api/auth": ""
//   },
//   "changeOrigin": true
// }))

//
// const PORT = 8081;
// const HOST = "0.0.0.0";
//
// app.use(
//     createProxyMiddleware("/", {
//       target: "http://127.0.0.1:8081/",
//     })
// );
//
// app.listen(PORT, HOST);
