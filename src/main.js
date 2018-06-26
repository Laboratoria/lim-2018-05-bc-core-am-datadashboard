// declarando variable DE BOTON
const btnLogging = document.getElementById('logging');

// funcion para agregar evento a logging
btnLogging.addEventListener('click', function () {
  const laboratoria2 = document.getElementById('laboratoriaBar');
  const navigatingBar = document.getElementById('navigatingBar');
  const loggingIn = document.getElementById('loggingIn');
  // condicional para ingresar con usuario y contraseña
  if (document.form.password.value == 'CONTRASEÑA' && document.form.user.value == 'USUARIO') {
    loggingIn.classList.replace('show', 'hide');
    navigatingBar.classList.replace('hide', 'show');
    laboratoria2.classList.replace('hide', 'show');
  } else {
    alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
  }
});

// agregar evento a botOn LIMA (aparece lista de cohorts/promociones)
const cohort = document.getElementById("sede-lima");
cohort.addEventListener('click', (event) => {
  event.preventDefault(); 
  // funcion para obtener lista de cohorts/promociones
  getData(urlCohort, () => {
    const laboratoria2 = document.getElementById('laboratoria2');
    const sedes = document.getElementById('sedes');
    laboratoria2.classList.replace('hide', 'show');
    navigatingBar.classList.replace('show', 'hide');
    sedes.classList.replace('hide', 'show');
    laboratoria2.classList.replace('hide', 'show');
    // for of que recorre array de json cohorts
    for (const element of getCohorts()) {
      const list = document.getElementById("lista-cohorts");
      const liCohorts = document.createElement('li');
      liCohorts.setAttribute('id', element.id);
      liCohorts.setAttribute('class','elem-cohort')
      liCohorts.innerHTML = element.id;
      list.appendChild(liCohorts);
      const liuser = document.getElementById('lim-2018-03-pre-core-pw')
      if(liuser == liCohorts){
        addEventToCohortElem(liuser);
      }
    };
  });
});
// agregar evento a un cohort(lim-2018-03-pre-core-pw)
window.addEventToCohortElem = (elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    // funcion para recorrer json users(obtener nombres de estudiantes)
    getData(urlUser, () => {
      for (const element of getUsers()) {
        const list = document.getElementById("list-students");
        const liStudent = document.createElement('li');    
        liStudent.setAttribute('id', element.id);
        liStudent.innerHTML = element.name;
        list.appendChild(liStudent);
        addEventToUserElem(liStudent);
      }
    })
  })
};
// agrgar evento a los elementos de la lista de estudiantes
window.addEventToUserElem = (elem) => {
  elem.addEventListener('click', () => {
    event.preventDefault();
    // funcion para obtener porcentaje total de estudiantes
    getData(urlProgress,  () =>{
      const id = elem.getAttribute('id');
      const data = getProgress(id);
      if (data) {
        console.log(data)
        const elemnnto = document.getElementsByClassName("elimina");
        if(elemnnto){
      }
        const list = document.getElementById("progress");
        const a = document.createElement('a');
        const percent = document.createElement('span');
        const lista = document.createElement('li');
        percent.setAttribute('class','elimina');       
        percent.innerHTML = "porcentaje total : "+ data.percent;
        lista.appendChild(percent);
        list.appendChild(lista); 
      }
    })
  })
};
