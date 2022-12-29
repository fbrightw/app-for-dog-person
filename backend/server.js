const express = require("express");
const proxy = require("http-proxy-middleware");

function data(login, password) {
  this.login = login;
  this.password = password;

}
const app = express();

const {liked_list} = require("./controllers/liked_list")

app.get("/liked_list", liked_list);


app.listen(8080);

app.use(proxy("/api/auth/login", {
  "target": "<TARGET>",
  "secure": false,
  "logLevel": "debug",
  "pathRewrite": {
    "^/api/auth": ""
  },
  "changeOrigin": true
}))

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
