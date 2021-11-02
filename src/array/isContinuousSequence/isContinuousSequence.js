const isContinuousSequence = (array) => {
  const size = array.length;
  const [firstElement] = array;

  if (size === 0 || size === 1) return false;

  for (let i = 0; i < size; i += 1) {
    if (array[i] - i !== firstElement) return false;
  }
  return true;
};
export default isContinuousSequence;

console.log(isContinuousSequence([1, 2, 3]));
