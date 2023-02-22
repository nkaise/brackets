module.exports = function check(str, bracketsConfig) {
  
  var openBrackets = [];
  var closeBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    for (let j = 0; j < bracketsConfig[i].length; j++) {
      openBrackets.push(bracketsConfig[i][0]);
    }
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    for (let j = 0; j < bracketsConfig[i].length; j++) {
      closeBrackets.push(bracketsConfig[i][1]);
    }
  }

  openBrackets = [...new Set(openBrackets)];
  closeBrackets = [...new Set(closeBrackets)];

  var objectBrackets = {};

  for (let i = 0; i < closeBrackets.length; i++) {
    objectBrackets[closeBrackets[i]] = openBrackets[i];
  }

  let stack = [];

  for (let i =0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];

    if (openBrackets.includes(currentSymbol)) {
      if (objectBrackets[currentSymbol] === currentSymbol) {
          if (topElement === currentSymbol) {
            stack.pop()
          }
          else {
            stack.push(currentSymbol);
          }
      }
      else {
        stack.push(currentSymbol);
      }
    }
    else {
      if (stack.length === 0) {
        return false
      }

      if (objectBrackets[currentSymbol] === topElement) {
        stack.pop();
      }
      else {
        return false
      }
    }
  }
  return stack.length === 0;
}

