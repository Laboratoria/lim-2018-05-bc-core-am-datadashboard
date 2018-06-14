
var cohort = document.getElementById("Lima");
function getcohort(){
  var xhr = new XMLHttpRequest();
  //console.log(xhr);
	xhr.open("GET","http://127.0.0.1:8080/data/cohorts.json");
xhr.onload = function getusers(){
	if (xhr.status == 200){
		JSON.parse(xhr.responseText);
	}
}
  xhr.onerror = function handlerror(){
    console.log("Hay un error");
};
	xhr.send();
	}


cohort.addEventListener("click",getcohort); 
//function imprimir(){
	//var data = document.getElementsById(data);

//data.innerHTML = getcohort.map();
//}
