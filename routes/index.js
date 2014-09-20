module.exports.get = {
	"/": [],
	"/something": "Waddup"
}

module.exports.post = {
	"/data": function( req, res ) {
		this.respond( req, res, "Successful POST", 200 );
	}
}