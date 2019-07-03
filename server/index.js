var mosca = require("mosca");
const setting = {
    port: 8010,
    http:{
        port: 8020,
        bundle: true,
        statci: './'
    }
}
var server = new mosca.Server({
http: {
  port: 3000,
  bundle: true,
  static: './'
}
});