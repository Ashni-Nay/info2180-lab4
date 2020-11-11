/* Add JavaSxript here*/

window.onload = function(){
	let sbuttn = document.getElementById("searchbutt").addEventListener("click");

    var httpRequest = new XMLHttpRequest();
	var url = "http://localhost/info2180-lab4/superheroes.php";
	httpRequest.onreadystatechange = superhero;
	
	function superhero(){	
	if (httpRequest.readyState === XMLHttpRequest.DONE){
		if (httpRequest.status === 200) {
			var response = httpRequest.responseText;
			var result = document.querySelector('result');
			result.innerHTML = response;
		}
		else{
			alert("There was a problem");
		}
		
	httpRequest.open("GET",url);
	httpRequest.send();
	}
}
});