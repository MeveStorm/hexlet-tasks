const run = (text) => {
  const takeLast = (str, num) => {
    if (str.length < num) return null;
    return str.split('').reverse().join('').substring(0, num);
  };

  return takeLast(text, 4);
};

export default run;
