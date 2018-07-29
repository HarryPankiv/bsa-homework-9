module.exports = function randomBotRes() {
  const randomQuery = [
    'Try again, smth wrong',
    'Nope, wrong',
    'Are u even trying?'
  ];
  
  return randomQuery[Math.floor(Math.random() * randomQuery.length)]
};
