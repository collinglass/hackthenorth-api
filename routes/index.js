var keigai 		= require( "keigai" ),
	evi   		= keigai.store(),
	epil   		= keigai.store()
	evi_data	= require( "../data/evi_data.json" ),
	epil_data	= require( "../data/epil_data.json" );

evi.set(null, evi_data);
epil.set(null, epil_data);

module.exports.get = {
	"/": [],
	"/data/evi": function( req, res ) {
		this.respond( req, res, evi.dump(), 200 );
	},
	"/data/epil": function( req, res ) {
		this.respond( req, res, epil.dump(), 200 );
	}
}

module.exports.post = {
	"/data": function( req, res ) {
		// var body 	= JSON.parse(req.body),
		// 	severity	= body.level;
		this.respond( req, res, "Body: " + req.body, 200 );
	}
}
