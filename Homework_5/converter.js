

var converterDiv  = document.querySelector("#converter");	
var convertBtn = document.querySelector("[data-btn='convert']");
var dropdown = document.getElementById("dropdown"); 
var conversationRate = 1;

	
	function reqListener () {
		var response = JSON.parse(this.responseText);
		var rates =  response.rates;
		$('#dropdown').empty();
		$.each(Object.keys(rates), function(i, p) {
    		$('#dropdown').append($('<option></option>').val(p).html(p));
		});

		var arr = $.map(rates, function(el) { return el });

		convertBtn.addEventListener("click", function(e) {
		e.preventDefault();
		selValue = dropdown.selectedIndex;
		converter.innerHTML = arr[selValue];
		console.log(rates);	


	});

		
	}

	var request = new XMLHttpRequest();
	request.addEventListener("load", reqListener);
	request.open("GET", "http://api.fixer.io/latest?base=USD");
	request.send();



window.onload=function(){
	converter.innerHTML = 1.3028;
}
