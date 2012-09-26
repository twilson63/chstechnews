var flatiron = require('flatiron'),
  app = flatiron.app,
  ecstatic = require('ecstatic'),
  request = require('request'),
  es = require('event-stream'),
  prospect = require('./prospect');

var COUCH = process.env.COUCH;
//var COUCH = 'https://chsadmin:rocks@technews.iriscouch.com:6984/chs';
app.use(flatiron.plugins.http);

app.http.before = [
  ecstatic(__dirname + '/public')
];

app.router.post('/prospects', function(){
  es.pipeline(
    this.req,
    prospect(),
    request.post(COUCH, { json: true}),
    this.res);
});

app.start(3000);

console.log('Listening on Port 3000...');
console.log('CTRL-C to quit');

