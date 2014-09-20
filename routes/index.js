var keigai 	= require( "keigai" ),
	store   = keigai.store();

store.set(null, {"waddup": "homes"});

module.exports.get = {
	"/": [],
	"/data": function( req, res ) {
		this.respond( req, res, store.dump(), 200 );
	}
}

module.exports.post = {
	"/data": function( req, res ) {
		this.respond( req, res, "Successful POST", 200 );
	}
}

