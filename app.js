var tenso  		= require( "tenso" ),
	routes 		= require( "./routes" );


var config = {
	routes: routes,
	hostname: "127.0.0.1",
	port: 8000
}

tenso( config );

console.log("API engaged! cling! clang! bvvvvv!...");