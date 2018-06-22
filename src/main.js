// funciones para ocultar login y mostrar otras páginas 
const btnLogging = document.getElementById('logging');
const loggingIn = document.getElementById('loggingIn');
const laboratoria1 = document.getElementById('laboratoria1');
const laboratoriaBar = document.getElementById('laboratoriaBar');
const btnLima = document.getElementById('lima');
const laboratoria2 = document.getElementById('laboratoria2');
const navigatingBar = document.getElementById('navigatingBar');

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

  
 
