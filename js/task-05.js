console.log('================== task 5 =============================');

const checkForSpam = function (string) {
  let downStr = string.toLowerCase();

  if (downStr.includes('sale') || downStr.includes('spam')) {
    return true;
  } else {
    return false;
  }
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
console.log(checkForSpam('sPam gdsd gfh')); // true
