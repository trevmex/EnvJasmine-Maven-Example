if (typeof NS === 'undefined' || !NS) {
    var NS = {};
}

NS.runIfTrevor = function (name, callback) {
    if (name === 'Trevor') {
    	callback(name);
    } else {
    	console.log('You aren\'t Trevor!');
    }
};
