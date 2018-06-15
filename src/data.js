var cohort = document.getElementById("Lima");
var list = document.getElementById("listaCohorts");

const getcohort = () => {
  var xhr = new XMLHttpRequest();
  //console.log(xhr);	
  xhr.open("GET", "../data/cohorts.json");
  xhr.onload = getusers;
  xhr.onerror = handlerror;
  xhr.send();
}
const getusers = (event) => {
  let data = JSON.parse(event.target.responseText);
  console.log(data);
  data.forEach(curso => {
    var lista = document.createElement('li');
    lista.value = curso.id;
    lista.innerHTML = curso.id;
    list.appendChild(lista);
  });
}

const handlerror = () => {
  console.log("Hay un error");
}

cohort.addEventListener('click', (event) => {

  event.preventDefault();
  getcohort();
});