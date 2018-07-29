const weather = require('./parserOptions/weather');
const currency = require('./parserOptions/currency');
const note = require('./parserOptions/note');
const quote = require('./parserOptions/quote');
const question = require('./parserOptions/question');
const random = require('./parserOptions/randomQuery');
const reqTypes = require('./reqTypes');

class Parser {
  constructor(reqType) {
    console.log(reqType)
    this.reqType = reqType;
  }

  parse(message) {
    if (this.reqType === 'weather') {
      return weather(message);
    } else if (this.reqType === 'currency') {
      return currency(message);
    } else if (this.reqType === 'note') {
      return note(message);
    } else if (this.reqType === 'question') {
      return question();
    } else if (this.reqType === 'quote') {
      return quote();
    } else if (this.reqType === 'random') {
      return random();
    }
  }
}

// facade pattern
class Facade {
  check(message) {
    let reqType = reqTypes(message);
    return new Parser(reqType).parse(message);
  }
}

module.exports = Facade;
