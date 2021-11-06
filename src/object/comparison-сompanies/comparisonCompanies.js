const comparisonCompanies = (company1, company2) => {
  const property = ['name', 'state', 'website'];

  for (let i = 0; i < property.length; i += 1) {
    if (company1[property[i]] !== company2[property[i]]) return false;
  }
  return true;
};

const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://code-basics.com' };
console.log(comparisonCompanies(company1, company2));
export default comparisonCompanies;
