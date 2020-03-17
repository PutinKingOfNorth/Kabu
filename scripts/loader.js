function isJoinable() {
	return false;
	let req = new XMLHttpRequest();
	req.addEventListener('load', function onResponse(res) {
		console.log(res);
		return res.jason.isJoinable;
	});
	req.open('GET', 'isjoinable');
	req.send();
}

if(isJoinable()){

}else{
	let elem=document.getElementById("loading_label");
	elem.textContent= "sorry server is full";
}
