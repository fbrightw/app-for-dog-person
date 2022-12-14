const path = require('path');


function liked_list(req, res) {
  //need to check if there is data in bd, if not write corresponding answer
  // res.sendFile(path.join(__dirname, "../../public", "index.html"));
  // return response.send("data from bd")
  res.render('index')
}

module.exports = {liked_list}