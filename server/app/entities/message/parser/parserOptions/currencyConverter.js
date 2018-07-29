const UAHtoUSD = 0.038;
const UAHtoEUR = 31.26;
const EURtoUSD = 1.17;
const KRWtoUSD = 1114;
const KRWtoEUR = 1300;
const KRWtoUAH = 41.55;


module.exports = function currencyConverter(amount, param1, param2) {
    let result;
    if (param1 === 'UAH' && param2 === 'EUR') {
      result = amount / UAHtoEUR;
    } else if (param1 === 'UAH' && param2 === 'USD') {
      result = amount * UAHtoUSD;
    } else if (param1 === 'UAH' && param2 === 'KRW') {
      result = amount * KRWtoUAH;
    } else if (param1 === 'EUR' && param2 === 'USD') {
      result = amount * EURtoUSD;
    } else if (param1 === 'EUR' && param2 === 'UAH') {
      result = amount * UAHtoEUR;
    } else if (param1 === 'EUR' && param2 === 'KRW') {
      result = amount * KRWtoEUR;
    } else if (param1 === 'USD' && param2 === 'KRW') {
      result = amount * KRWtoUSD;
    } else if (param1 === 'USD' && param2 === 'EUR') {
      result = amount / EURtoUSD;
    } else if (param1 === 'USD' && param2 === 'UAH') {
      result = amount / UAHtoUSD;
    } else if (param1 === 'KRW' && param2 === 'UAH') {
      result = amount / KRWtoUAH;
    } else if (param1 === 'KRW' && param2 === 'USD') {
      result = amount / KRWtoUSD;
    } else if (param1 === 'KRW' && param2 === 'EUR') {
      result = amount / KRWtoEUR;
    } else if (param1 === param2) {
      result = amount;
    }
    return `${result.toFixed(2)} ${param2}`;
}