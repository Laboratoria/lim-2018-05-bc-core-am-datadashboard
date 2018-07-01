// window.computeruserstate
window.computeUsersStats = (users,progress,courses)=>{
    listProgress.setProgres(progress)

    const listUsers= users.map(usersWithStats => {

      usersWithStats.stats = {
        percent : listProgress.getIntroById(usersWithStats.id).percent,
        exercises : listProgress.getExersicesById(usersWithStats.id),
        reads: listProgress.getReadsById(usersWithStats.id),
        quizzes: listProgress.getQuizzesById(usersWithStats.id),
      };
      return usersWithStats
    });
     console.log(listUsers)

    return listUsers;
  };
  
