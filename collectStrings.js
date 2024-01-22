// FIXME
// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

const collectStrings = (obj) => {
  let res = [];
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      res = [...res, obj[key]];
    } else if (typeof obj[key] === 'object') {
      res = res.concat(collectStrings(obj[key]));
    }
  }
  return res;
};
collectStrings(obj); // ["foo", "bar", "baz"])
