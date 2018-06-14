
var cohort = document.getElementById("Lima");
function getcohort(){
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.open("GET","http://127.0.0.1:8080/data/cohorts.json");
  xhr.onload = getusers;
  xhr.onerror = handlerror;
  xhr.send();
}

function getusers(){
    console.log (this.responseText);
}
function handlerror(){
    console.log("Hay un error");
}
cohort.addEventListener("click",getcohort);