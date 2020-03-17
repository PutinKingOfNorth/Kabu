function isJoinable() {
	let req = new XMLHttpRequest();
	req.addEventListener('load', function onResponse(res) {
		console.log(res);
		return res.jason.isJoinable;
	});
	req.open('GET', 'isjoinable');
	req.send();
}

if(isJoinable()){
	let newLocation= window.location;
	let slashLoc = newLocation.lastIndexOf(/);
	newLocation = newLocation.substring(0,slashLoc);
	location.replace(newLocation + '/join');

}else{
	let elem=document.getElementById("loading_label");
	elem.textContent= "sorry server is full";
}

function playersList() {
	let req = new XMLHttpRequest();
	req.addEventListener('load', function onResponse(res) {
		console.log(res);
		return res.jason.players;
	});
	req.open('GET', 'players');
	req.send();
}
