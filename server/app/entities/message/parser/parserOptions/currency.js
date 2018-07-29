const randomQuery = require('./randomQuery');
const currencyConverter = require('./currencyConverter');

const currencyTypes = ['USD', 'EUR', 'UAH', 'KRW'];

module.exports = function currencyOption(msg) {
  let valueRegExp = new RegExp(/[0-9]+/);
  let value = +valueRegExp.exec(msg);
  for (let i = 0; i < currencyTypes.length; i++) {
    let pattern = new RegExp(`@bot Convert ${value} ${currencyTypes[i]}`);
    if (pattern.test(msg)) {
      for (let j = 0; j < currencyTypes.length; j++) {
        let pattern = new RegExp(`@bot Convert ${value} ${currencyTypes[i]} to ${currencyTypes[j]}`);
        if (pattern.test(msg)) {
          return(currencyConverter(value, currencyTypes[i], currencyTypes[j]));
        }
      }
    }
  }
  return randomQuery();
};