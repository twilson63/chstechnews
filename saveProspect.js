var es = require('event-stream'),
  redis = require('redis'),
  client = redis.createClient(Number(process.env.REDIS_PORT), process.env.REDIS_HOST);

client.auth('0d5859a31a85414f653d5c6f61850d66', function (err) {
  if (err) { throw err; }
  // You are now connected to your redis.
});

module.exports = function() {
  return es.map(function(data,cb){
    var obj = JSON.parse(data);
    client.hmset("prospects:" + obj.email, obj);
    cb(null, data);
  });
}