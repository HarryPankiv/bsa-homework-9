const handler = require('./parser/parser');

module.exports = catchBotReq = new Proxy(function () {
}, {
  apply: function (target, thisArg, argument) {
    if (/@bot /.test(argument[0])) {
      return new handler().check(argument[0]);
    } else return false;
  }
});