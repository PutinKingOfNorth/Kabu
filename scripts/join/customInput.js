var inputElem = document.getElementById("input_name");
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

var joinBtn = document.getElementById("button_join");
joinBtn.disabled = true;
