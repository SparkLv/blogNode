var up = require("../common/upload");
var formidable = require("formidable");

module.exports = {
  upload: function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      up.upload(files.file.path, files.file.name,res);
    });
  }
};
