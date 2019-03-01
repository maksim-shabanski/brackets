module.exports = function check(str, bracketsConfig) {
  var bracketMapping = {};
  var brackets = str.split("");
  var bracketsLength = brackets.length;
  var openingBracketsStack = [];

  if (bracketsLength % 2 !== 0) return false;

  bracketsConfig.forEach(function(config) {
    var openBracket = config[0];
    var closeBracket = config[1];

    bracketMapping[closeBracket] = openBracket;
  });

  for (var i = 0; i < bracketsLength; i++) {
    var bracket = brackets[i];
    var stackLength = openingBracketsStack.length;

    if (
      stackLength === 0 ||
      openingBracketsStack[stackLength - 1] !== bracketMapping[bracket]
    ) {
      openingBracketsStack.push(bracket);
    } else {
      openingBracketsStack.pop();
    }
  }

  return !openingBracketsStack.length;
};
