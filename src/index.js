module.exports = function check(str, bracketsConfig) {
  // your solution

  let newStr;

  do {
      newStr = str.length;

      for (let [x, y] of bracketsConfig) {
          str = str.replace(x + y, '')
          // console.log(str)
      };

  } while (str.length < newStr);

  return str.length === 0;
};