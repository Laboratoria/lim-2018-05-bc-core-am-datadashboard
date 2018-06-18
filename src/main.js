// funcion para ocultar logging y mostrar formulario

let btnLogging = document.getElementById('logging');
let newTab = document.getElementById('newTab');
let loggingIn = document.getElementById('loggingIn');

btnLogging.addEventListener('click', function(){
  loggingIn.classList.replace('show','hide');
  newTab.classList.remove('hide');
  newTab.classList.add('show');
});

//Mostrar lista de cohorts dando click en boton
cohort.addEventListener('click', (event) => {
  event.preventDefault();
  getcohort();
});