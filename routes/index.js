var keigai 		= require( "keigai" ),
	evi   		= keigai.store(),
	epil   		= keigai.store()
	evi_data	= require( "../data/evi_data.json" ),
	epil_data	= require( "../data/epil_data.json" ),
	date 		= new Date(),
	num			= 31;

evi.set(null, evi_data);
epil.set(null, epil_data);
evi.set(num, { State: num, high: 0, med: 0, low: 0 });

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
		var body 	= JSON.parse(req.body),
			level	= body.level,
			today 	= new Date;

		if (date.toDateString() != today.toDateString()) {
			num++;
			date = today;
			if (level == 1)
				epil.set(num-1, { State: num, high: 0, med: 0, low: 1 });
			else if (level == 2)
				epil.set(num-1, { State: num, high: 0, med: 1, low: 0 });
			else
				epil.set(num-1, { State: num, high: 1, med: 0, low: 0 });
		} else {
			var obj = evi.get(num);
			if (level == 1)
				obj.low += 1;
			else if (level == 2)
				obj.med += 1;
			else
				obj.high += 1;
			evi.set(num, obj);
		}

		this.respond( req, res, { status: "Successful" }, 200 );
	}
}
