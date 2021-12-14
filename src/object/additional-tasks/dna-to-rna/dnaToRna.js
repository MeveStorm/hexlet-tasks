import _ from 'lodash';
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const dnaToRna = (dna) => {
  const rnaDecoding = {
    G: 'C', C: 'G', T: 'A', A: 'U',
  };
  let rna = '';

  for (const nucleotide of dna) {
    const hasNucleotide = _.has(rnaDecoding, nucleotide);
    if (hasNucleotide) rna += rnaDecoding[nucleotide];
    else return null;
  }

  return rna;
};

export default dnaToRna;
