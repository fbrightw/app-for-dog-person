const express = require("express");

function data(login, password) {
  this.login = login;
  this.password = password;
}

const app = express();
const {liked_list} = require("./controllers/liked_list")

app.get("/liked_list", liked_list);

app.listen(8080);