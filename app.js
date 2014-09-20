var tenso  		= require( "tenso" ),
	routes 		= require( "./routes" ),
	dev			= true,
	hostname,
	port;

if (dev) {
	hostname = "localhost";
	port = "8000";
} else {
	hostname = "pacific-sands-9126.herokuapp.com";
	port = process.env.PORT;
}

var config = {
	routes: routes,
	hostname: hostname,
	port: port
}

tenso( config );

console.log("API engaged! cling! clang! bvvvvv!...");

