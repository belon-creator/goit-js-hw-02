console.log('================== task 4 =============================');

const formatString = function (string) {
  const symbol = string;
  let numbOfSymb = 40;

  if (symbol.length <= numbOfSymb) {
    return string;
  } else {
    return string.substring(0, numbOfSymb) + '...';
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
