const randomQuery = require('./randomQuery');

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'today', 'tommorow'];
const cities = ['Lviv', 'Kyiv', 'Kharkiv', 'Odessa', 'Dnipro'];

module.exports = function weather(msg) {
  for (let i = 0; i < days.length; i++) {
    if (days[i] === 'today' || days[i] === 'tomorrow') {
      let rule = new RegExp(`@bot What is the weather ${days[i]} in `);
      if (rule.test(msg)) {
        for (let j = 0; j < cities.length; j++) {
          rule = new RegExp(`@bot What is the weather ${days[i]} in ${cities[j]}`);
          if (rule.test(msg)) {
            return `${days[i]} in ${cities[j]} weather will be 20 degrees celsium`;
          }
        }
      }
    } else {
      let rule = new RegExp(`@bot What is the weather on ${days[i]} in `);
      if (rule.test(msg)) {
        for (let j = 0; j < cities.length; j++) {
          rule = new RegExp(`@bot What is the weather on ${days[i]} in ${cities[j]}`);
          if (rule.test(msg)) {
            return `The weather in ${cities[j]} will be 18 degrees celsium on ${days[i]}`;
          }
        }
      }
    }
  }
  return randomQuery();
};
