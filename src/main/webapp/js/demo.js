if (typeof NS === 'undefined' || !NS) {
    var NS = {};
}

NS.greeter = function (name) {
	return 'Hello ' + name + '!';
};