const getIntersectionOfSortedArrays = (arrayOne, arrayTwo) => {
  const resultArray = [];
  let indexOne = 0;
  let indexTwo = 0;

  while (indexTwo < arrayTwo.length) {
    if (arrayOne[indexOne] === arrayTwo[indexTwo]) {
      resultArray.push(arrayOne[indexOne]);
      indexOne += 1;
      indexTwo += 1;
    } else if (arrayOne[indexOne] < arrayTwo[indexTwo]) indexOne += 1;
    else indexTwo += 1;
  }
  return resultArray;
};

export default getIntersectionOfSortedArrays;
