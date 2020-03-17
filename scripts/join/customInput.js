let urlPar= new URLSearchParams(window.location.search);
let hasErorr = urlPar.has('error');


let joinBtn = document.getElementById("button_join");
joinBtn.disabled = true;


if (hasErorr)
{

	let form = document.getElementById('form');
	let newPar = document.createElement("div");
	let newText = document.createTextNode("Error: "+urlPar.get('error'));
	newPar.appendChild(newText);
	form.insertBefore(newPar, joinBtn);
}

let inputElem = document.getElementById("input_name");
let cb = function (e)
{
	let newText = e.target.value;
	let filtered = newText.split(" ").join(""); //remove spaces
	if (filtered.length > 10)
	{
		filtered = filtered.substr(0, 10);
	}
	if (filtered.length >= 3)
	{
		joinBtn.disabled = false;
	}
	else
	{
		joinBtn.disabled = true;
	}
	e.target.value = filtered;
};
inputElem.addEventListener('input', cb);
inputElem.addEventListener('propertychange', cb);
