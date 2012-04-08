if (typeof NS === 'undefined' || !NS) {
    var NS = {};
}

NS.greetUser = function (id) {
    return $.ajax({
    	data: id,
    	url: 'name.html',
    	success: function (data) {
        	NS.greeter(data.name);
        },
        error: function (jqXHR, textStatus) {
        	console.error('Request failed: ' + textStatus);
        }
    });
};
