function compute()
{
    var amount = document.getElementById("amount");
    if (amount.value == "")
		{
			alert("Please enter a possitive number");
			amount.focus();
		}
	else if(parseInt(amount.value)<1)
	{
		alert("Amount must be a possitive number");
		amount.focus();
	}
	else{
		document.getElementById("p1").style.display = "block";
		document.getElementById("p2").style.display = "block";
		document.getElementById("p3").style.display = "block";
		document.getElementById("p4").style.display = "block";
		var dt = new Date();
		document.getElementById("deposit").innerText = document.getElementById("amount").value;
		document.getElementById("rate").innerText = document.getElementById("ir").value;
		document.getElementById("amountlb").innerText = parseInt(document.getElementById("amount").value/100*
		document.getElementById("ir").value*document.getElementById("no_of_year").value);
		document.getElementById("yearlb").innerText = parseInt(dt.getFullYear())+parseInt(document.getElementById("no_of_year").value);
	}
}
function setValue()
{
	r = document.getElementById("ir");
	document.getElementById("percent").innerText = r.value + "%";
}
        