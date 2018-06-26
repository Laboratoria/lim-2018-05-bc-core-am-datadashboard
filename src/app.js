const urlCohort = "../data/cohorts.json"
const urlUser = "../data/cohorts/lim-2018-03-pre-core-pw/users.json"
const urlProgress = "../data/cohorts/lim-2018-03-pre-core-pw/progress.json"

//funcion para obtener datos json
const getData = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = callback;
  xhr.send();
};

// funcion para llamar lista de cohorts
const getCohorts = () => {
  return JSON.parse(event.target.responseText);
};

//funcion para llamar lista de estudiantes  
const getUsers = () => {

  return JSON.parse(event.target.responseText);

};

// funcion para obtener el progreso de cada estudiante
const getProgress = (id) => {
  let data3 = JSON.parse(event.target.responseText);
  if (data3) {
    return data3[id].intro
  };
  return false;
}
// window.computerUsersState(users,progress,courses)
// id de users=id Progress bote info del progres(for of)

// ronald

// let  xhr = new XMLHttpRequest();

// let auth = {
//   login : (user,password)=>{
//     if(user === 'USUARIO'  && password === 'CONTRASEÑA'){
//         return true
//     }
//     return false
//   },
//   getUser : ()=>{
//       let user = {
//         name : "Ronald",
//         lastName : "Cutisaca"
//       }
//       return user
//   }
// }
// let peticionXMLHttp = { 
//   call = (url,callback)=>{
//     xhr.open("GET", url, true);
//     xhr.onload = callback;
//     xhr.send(null);
//   },
//   getCohorts: () => {    
//     const response = JSON.parse(xhr.responseText);
//     return response
//   },
//   computeUsersStats : (users,progress,courses) => {

//   },

 
// }