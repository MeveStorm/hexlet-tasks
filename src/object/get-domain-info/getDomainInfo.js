const domainProtocol = (domain) => {
  const http = 'http://';
  const https = 'https://';
  let domainFull = '';

  if (domain.startsWith(http) || domain.startsWith(https)) {
    return domain;
  }
  domainFull = `${http}${domain}`;
  return domainFull;
};

const getDomainInfo = (domain) => {
  const domainFull = domainProtocol(domain);
  const separator = '://';
  const [scheme, name] = domainFull.split(separator);

  const domainInfo = { scheme, name };
  return domainInfo;
};

export default getDomainInfo;

// ==========================

// export default (domain) => {
//   let scheme = '';
//   if (domain.startsWith('https://')) {
//     scheme = 'https';
//     // else if другие протоколы
//   } else {
//     scheme = 'http';
//   }
//
//   const name = domain.replace(`${scheme}://`, '');
//
//   return { scheme, name };
// };
