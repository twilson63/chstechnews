es = require('event-stream');

module.exports = function() {
  return es.map(function(data, cb) {
    var doc = JSON.parse(data);
    doc.type = 'Prospect';
    doc.createdAt = new Date();
    cb(null, JSON.stringify(doc));
    });
}
