module.exports = function quote() {
  const quotes = [
    'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself',
    'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us',
    'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do'
  ];

  return quotes[Math.floor(Math.random() * quotes.length)]
};
