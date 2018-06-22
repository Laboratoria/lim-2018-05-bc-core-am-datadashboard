// funcion para ocultar logging y mostrar formulario
let btnLogging = document.getElementById('logging');
let loggingIn = document.getElementById('loggingIn');
let laboratoria1 = document.getElementById('laboratoria1');
let laboratoriaBar = document.getElementById('laboratoriaBar');
let btnLima = document.getElementById('lima');
let laboratoria2 = document.getElementById('laboratoria2');
let navigatingBar = document.getElementById('navigatingBar');

btnLogging.addEventListener('click', function(){
  loggingIn.classList.replace('show', 'hide');
  laboratoriaBar.classList.replace('hide', 'show');
  navigatingBar.classList.replace('hide', 'show');
});
btnLima.addEventListener('click', function(){
  navigatingBar.classList.replace('show', 'hide');
  laboratoria2.classList.replace('hide', 'show');
});

//Mostrar lista de cohorts dando click en boton
cohort.addEventListener('click', (event) => {
  event.preventDefault();
  getcohort();
});

  
 
