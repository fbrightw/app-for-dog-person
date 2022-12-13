function liked_list(request, response) {
  //need to check if there is data in bd, if not write corresponding answer

  return response.send("data from bd")
}

module.exports = {liked_list}