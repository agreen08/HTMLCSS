addEventListener("message", function (e) {

	var data = e.data;

	switch (data.cmd) {
	case 'start':
		postMessage("HOTOK BANYWEH : " + data.msg);
		break;
	case 'stop':
		postMessage("HOTOK OCTAHOBJEH : " + data.msg);
		close();
		break;
	default:
		postMessage("НЕИВЕСТНАЯ КОМАНДА : " + data);
	}
}, true);