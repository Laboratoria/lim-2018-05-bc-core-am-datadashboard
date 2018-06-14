var cohort = document.getElementById("Lima");
function getcohort(){
	var xhr = new XMLHttpRequest();
//	console.log(xhr)
      //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.open("GET","http://127.0.0.1:8080/data/cohorts.json");
			xhr.onload = lim;
			xhr.onerror = handleerror;
	
	  xhr.send();
		}
	function lim (){
	  const user = JSON.parse(this.responseText);
	  console.log(user);
	} 
	function handleerror(){
	  console.log("Hay un error")
	}

  cohort.addEventListener("click",getcohort);