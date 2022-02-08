const getGirlFriends = (users) => {
  const friendsUsers = users.map(({ friends }) => friends).flat();
  return friendsUsers.filter(({ gender }) => gender === 'female');
};

export default getGirlFriends;
