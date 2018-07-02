// window.computeruserstate
window.computeUsersStats = (users, progress, courses) => {
  listProgress.setProgres(progress)

  const listUsers = users.map(usersWithStats => {

    usersWithStats.stats = {
      percent: listProgress.getIntroById(usersWithStats.id).percent,
      exercises: listProgress.getExersicesById(usersWithStats.id),
      reads: listProgress.getReadsById(usersWithStats.id),
      quizzes: listProgress.getQuizzesById(usersWithStats.id),
    };
    return usersWithStats
  });
  console.log(listUsers)
  return listUsers;
};
function dynamicSort(property, orderDirection) {
  var sortOrder = orderDirection ? 1 : -1;

  return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}
window.sortUsers = (users, orderBy, orderDirection) => {
 const sortUsersList = users.sort(dynamicSort(orderBy, orderDirection));;
  console.log(sortUsersList);
  return sortUsersList;
};
