module.exports = {
  res400: function(err,res) {
    res.status(400);
    res.send(err);
  }
};
