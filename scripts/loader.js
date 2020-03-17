function isJoinable() {
	let req = new XMLHttpRequest()
	req.addEventListener('load', function onResponse(res) {
		console.log(res);
	});
	req.open('GET', 'isjoinable');
	req.send();
}
isJoinable();