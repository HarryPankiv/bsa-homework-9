module.exports = function question() {
  const advices = [
    'Have the courage to live a life true to yourself, not the life others expect of you',
    'If you blame it on someone else, don’t expect it to get better.',
    'Don’t give up what you want most for what you want now.',
    'Never let your sense of morals prevent you from doing what is right.',
    'Try not to take anything personally. No one thinks about you as much as you do.',
    'Smart girls like to hear they’re pretty, pretty girls like to hear that they’re smart.',
    'Happiness is a choice and everything else is a matter of perspective.'
  ];
  return advices[Math.floor(Math.random() * advices.length)];
};
