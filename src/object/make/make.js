const make = (name, data) => {
  const state = 'moderating';
  const createdAt = Date.now();

  const company = {
    name, state, createdAt, ...data,
  };
  return company;
};

export default make;
