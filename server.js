var flatiron = require('flatiron'),
  app = flatiron.app,
  ecstatic = require('ecstatic'),
  request = require('request'),
  es = require('event-stream'),
  createProspect = require('./prospect'),
  saveProspect = require('./saveProspect');

app.use(flatiron.plugins.http);

app.http.before = [
  ecstatic(__dirname + '/public')
];

app.router.post('/prospects', function(){
  es.pipeline(
    this.req,
    createProspect(),
    saveProspect(),
    this.res
  );
});

app.start(3000);

console.log('Listening on Port 3000...');
console.log('CTRL-C to quit');

