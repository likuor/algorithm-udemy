let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const stringifyNumbers = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      stringifyNumbers(obj[key]);
    }
  }
  return obj;
};

console.log(stringifyNumbers(obj));

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
